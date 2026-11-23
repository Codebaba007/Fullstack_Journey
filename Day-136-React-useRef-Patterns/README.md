# Day 136 - React Practical `useRef` Patterns (Auto-Scroll & Debounced Search)

## Overview

This project builds on Day 135 by applying React's **`useRef`** hook to two real-world UI engineering patterns: **smooth auto-scrolling feeds** using invisible DOM anchor elements and **debounced search inputs** paired with previous-query tracking. It maintains React 19's strict render purity rules by keeping all `ref.current` reads and mutations inside event handlers and `useEffect`.

The application allows users to:

- Post new messages to a scrollable activity feed that automatically scrolls smoothly to the newest entry (`bottomRef.current?.scrollIntoView({ behavior: "smooth" })`).
- Manually jump to the top or bottom of the feed using DOM marker refs (`topRef` and `bottomRef`) while keeping the input field focused.
- Type rapidly into a search box without triggering redundant search executions on every keystroke, using `timeoutRef` and `clearTimeout` for a 600ms debounce delay.
- Track and display the previously committed search query using `lastCommittedRef.current`.

## Concepts Learned

- Using invisible anchor `<div>` elements with `useRef` and `.scrollIntoView({ behavior: "smooth" })`
- Triggering automatic DOM scroll side effects inside `useEffect` when list state updates
- Implementing input debouncing by storing `setTimeout` IDs in `timeoutRef.current` and canceling stale timers with `clearTimeout`
- Cleaning up pending timeouts on component unmount inside `useEffect`
- Persisting previous committed values across renders with `useRef` (`lastCommittedRef.current`)

## Project Structure

```text
Day-136-React-useRef-Patterns/
├── src/
│   ├── components/
│   │   ├── ChatFeedCard.jsx
│   │   └── DebounceSearchCard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Implementation

### 1. Root Component & Shared Feed State

File: `src/App.jsx`

```jsx
import { useState } from "react";
import "./App.css";
import ChatFeedCard from "./components/ChatFeedCard";
import DebounceSearchCard from "./components/DebounceSearchCard";

const initialMessages = [
  { id: 1, sender: "System", text: "Welcome to the live activity feed!" },
  { id: 2, sender: "Mehedi", text: "Testing Day 136 useRef scroll patterns." },
  { id: 3, sender: "System", text: "Add a few messages to see auto-scroll." },
];

function App() {
  const [messages, setMessages] = useState(initialMessages);

  function addMessage(text) {
    if (!text.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "Mehedi",
      text: text.trim(),
    };

    setMessages((prev) => [...prev, newMsg]);
  }

  function resetMessages() {
    setMessages(initialMessages);
  }

  return (
    <div className="container">
      <h1>Practical useRef Patterns</h1>

      <div className="card">
        <h2>App Level Status</h2>
        <p>
          Total Feed Messages: <strong>{messages.length}</strong>
        </p>
        <p>
          Latest Entry:{" "}
          <strong>
            {messages[messages.length - 1]?.text || "No messages"}
          </strong>
        </p>
      </div>

      <ChatFeedCard messages="{messages}" onAddMessage="{addMessage}" onResetMessages="{resetMessages}"/>

      <DebounceSearchCard/>
    </div>
  );
}

export default App;
```

### 2. Auto-Scroll Feed with DOM Marker Refs

File: `src/components/ChatFeedCard.jsx`

```jsx
import { useEffect, useRef, useState } from "react";

function ChatFeedCard({ messages, onAddMessage, onResetMessages }) {
  const [draft, setDraft] = useState("");

  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend(event) {
    event.preventDefault();
    if (!draft.trim()) {
      inputRef.current?.focus();
      return;
    }

    onAddMessage(draft);
    setDraft("");
    inputRef.current?.focus();
  }

  function handleScrollTop() {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollBottom() {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="card">
      <h2>1. Auto-Scroll Feed (scrollIntoView)</h2>

      <div className="chat-box">
        <div ref={topRef} />

        {messages.map((msg) => (
          <div key={msg.id} className="chat-bubble">
            <div className="chat-meta">
              <span>{msg.sender}</span>
              <span>#{msg.id.toString().slice(-4)}</span>
            </div>
            <p className="chat-text">{msg.text}</p>
          </div>
        ))}

        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSend}>
        <div className="form-group">
          <label htmlFor="chat-input">New Message</label>
          <input
            ref={inputRef}
            id="chat-input"
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Type a message and press Enter..."
          />
        </div>

        <div className="button-group">
          <button type="submit" className="success">
            Send Message
          </button>
          <button
            type="button"
            className="secondary"
            onClick={handleScrollTop}
          >
            Jump to Top
          </button>
          <button
            type="button"
            className="secondary"
            onClick={handleScrollBottom}
          >
            Jump to Bottom
          </button>
          <button
            type="button"
            className="danger"
            onClick={onResetMessages}
          >
            Reset Feed
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatFeedCard;
```

### 3. Debounced Search & Previous Term Tracking

File: `src/components/DebounceSearchCard.jsx`

```jsx
import { useEffect, useRef, useState } from "react";

const TOPICS = [
  "React Context API",
  "React useReducer Hook",
  "React useRef DOM Access",
  "React useEffect Lifecycle",
  "JavaScript Closures",
  "Vite Project Setup",
  "CSS Grid Layout",
];

function DebounceSearchCard() {
  const [rawInput, setRawInput] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [previousTerm, setPreviousTerm] = useState("None yet");
  const [searchExecutions, setSearchExecutions] = useState(0);

  const timeoutRef = useRef(null);
  const lastCommittedRef = useRef("None yet");

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  function handleSearchChange(event) {
    const nextValue = event.target.value;
    setRawInput(nextValue);

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setPreviousTerm(lastCommittedRef.current);
      setDebouncedTerm(nextValue);
      lastCommittedRef.current = nextValue.trim() || "Empty query";
      setSearchExecutions((count) => count + 1);
    }, 600);
  }

  function handleClearSearch() {
    clearTimeout(timeoutRef.current);
    setRawInput("");
    setDebouncedTerm("");
  }

  const filteredTopics = TOPICS.filter((topic) =>
    topic.toLowerCase().includes(debouncedTerm.trim().toLowerCase())
  );

  return (
    <div className="card">
      <h2>2. Debounced Search & Previous Term</h2>

      <div className="form-group">
        <label htmlFor="topic-search">Search Topics (600ms Debounce)</label>
        <input
          id="topic-search"
          type="text"
          value={rawInput}
          onChange={handleSearchChange}
          placeholder="Type 'React' quickly..."
        />
      </div>

      <div className="stats-grid">
        <div className="stat-box">
          <span className="stat-label">Searches Fired</span>
          <span className="stat-value">{searchExecutions}</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Previous Search</span>
          <span className="stat-value">{previousTerm}</span>
        </div>
      </div>

      <div className="status-banner" style={{ marginBottom: "12px" }}>
        <strong>Active Filter:</strong>{" "}
        {debouncedTerm ? `"${debouncedTerm}"` : "Showing all topics"} (
        {filteredTopics.length} match{filteredTopics.length === 1 ? "" : "es"})
      </div>

      <ul>
        {filteredTopics.map((topic) => (
          <li key={topic} style={{ marginBottom: "6px" }}>
            {topic}
          </li>
        ))}
      </ul>

      <div className="button-group">
        <button
          type="button"
          className="secondary"
          onClick={handleClearSearch}
        >
          Clear Search
        </button>
      </div>
    </div>
  );
}

export default DebounceSearchCard;
```

## How It Works

1. `App.jsx` owns the `messages` array in `useState`, displays the total message count and latest entry, and passes `messages`, `addMessage`, and `resetMessages` to `ChatFeedCard`.
2. `ChatFeedCard.jsx` places `<div ref={topRef} />` above the message list and `<div ref={bottomRef} />` below it inside `.chat-box` (`max-height: 210px; overflow-y: auto`).
3. Whenever `messages` changes, `useEffect` triggers `bottomRef.current?.scrollIntoView({ behavior: "smooth" })` to keep the newest message visible.
4. `DebounceSearchCard.jsx` updates `rawInput` immediately so typing feels instant, while storing a 600ms `setTimeout` ID in `timeoutRef.current`.
5. Each new keystroke calls `clearTimeout(timeoutRef.current)` before scheduling a fresh timer, ensuring search filtering and `lastCommittedRef.current` updates only execute once the user pauses typing.

## Key Takeaways

- Placing invisible anchor `<div>` elements with `useRef` gives clean, declarative scroll targets inside `overflow-y: auto` containers.
- Storing timeout IDs in `useRef` (`timeoutRef.current`) enables debouncing without losing the timer reference across keystroke re-renders.
- Always clear pending timers in a `useEffect` cleanup function (`return () => clearTimeout(timeoutRef.current)`) to prevent state updates after a component unmounts.

## Technologies Used

- React 19
- Vite
- JavaScript (ES6+)
- CSS3
- React `useRef`, `useEffect`, & `useState` Hooks

## Status

Completed - Day 136