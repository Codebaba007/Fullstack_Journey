# Day 135 - React `useRef` Basics (DOM Access & Persistent Values)

## Overview

This project introduces React's **`useRef`** hook and demonstrates its two core use cases: **direct DOM element manipulation** and **persisting mutable values across renders without triggering re-renders**. It also enforces React 19's strict render purity rules by reading and mutating `ref.current` exclusively inside event handlers and `useEffect`.

The application allows users to:

- Track component render counts silently in `App.jsx` using `useRef` and `useEffect`.
- Programmatically focus and highlight text inside an `<input>` element using `inputRef.current.focus()` and `inputRef.current.select()`.
- Automatically refocus the input field after adding a quick note.
- Control a stopwatch interval (`setInterval` / `clearInterval`) by storing the timer ID inside `timerIdRef.current`.
- Increment a silent background counter (`silentClicksRef.current`) in memory without causing unnecessary re-renders, then sync it to the UI on demand.

## Concepts Learned

- Creating and mutating ref containers with `useRef(initialValue)` and `.current`
- Accessing underlying HTML DOM nodes via the `ref={inputRef}` attribute
- Storing `setInterval` IDs across component re-renders without losing reference
- Understanding the difference between `useState` (triggers re-render) and `useRef` (persists silently)
- Following React 19's `react-hooks/refs` rule (never reading or writing `ref.current` during render)

## Project Structure

```text
Day-135-React-useRef-Basics/
├── src/
│   ├── components/
│   │   ├── FocusInputCard.jsx
│   │   └── TimerTrackerCard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Implementation

### 1. Root Component & Silent Render Tracking

File: `src/App.jsx`

```jsx
import { useEffect, useRef, useState } from "react";
import "./App.css";
import FocusInputCard from "./components/FocusInputCard";
import TimerTrackerCard from "./components/TimerTrackerCard";

function App() {
  const [notes, setNotes] = useState(["Learn useRef basics"]);
  const [renderMessage, setRenderMessage] = useState(
    "Click the button below to inspect the silent render count."
  );

  const appRenderCount = useRef(0);

  useEffect(() => {
    appRenderCount.current += 1;
  });

  function handleCheckRenders() {
    setRenderMessage(
      `App has rendered ${appRenderCount.current} time(s) so far.`
    );
  }

  function addNote(newNoteText) {
    if (!newNoteText.trim()) return;
    setNotes((prevNotes) => [newNoteText.trim(), ...prevNotes]);
  }

  function clearNotes() {
    setNotes([]);
  }

  return (
    <div className="container">
      <h1>React useRef Hook</h1>

      <div className="card">
        <h2>App Level Status</h2>
        <p>
          Saved Notes Count: <strong>{notes.length}</strong>
        </p>
        <p>{renderMessage}</p>

        <div className="button-group">
          <button className="secondary" onClick={handleCheckRenders}>
            Check App Render Count
          </button>
        </div>
      </div>

      <FocusInputCard notes="{notes}" onAddNote="{addNote}" onClearNotes="{clearNotes}"/>

      <TimerTrackerCard/>
    </div>
  );
}

export default App;
```

### 2. DOM Element Control with `useRef`

File: `src/components/FocusInputCard.jsx`

```jsx
import { useRef, useState } from "react";

function FocusInputCard({ notes, onAddNote, onClearNotes }) {
  const [text, setText] = useState("");
  const [statusMessage, setStatusMessage] = useState(
    "Click 'Focus Input' to jump cursor straight into the box."
  );

  const inputRef = useRef(null);

  function handleFocusInput() {
    inputRef.current.focus();
    setStatusMessage("Programmatically focused the <input> element via ref!");
  }

  function handleSelectText() {
    inputRef.current.focus();
    inputRef.current.select();
    setStatusMessage("Highlighted all text inside the <input> element!");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!text.trim()) {
      inputRef.current.focus();
      setStatusMessage("Input was empty — focused the box so you can type.");
      return;
    }

    onAddNote(text);
    setText("");
    inputRef.current.focus();
    setStatusMessage(`Added "${text.trim()}" and kept input focused!`);
  }

  return (
    <div className="card">
      <h2>1. DOM Access with useRef</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="quick-note">Quick Note Input</label>
          <input
            ref={inputRef}
            id="quick-note"
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Type a quick note..."
          />
        </div>

        <div className="button-group">
          <button type="submit" className="success">
            Add Note
          </button>
          <button type="button" onClick={handleFocusInput}>
            Focus Input
          </button>
          <button
            type="button"
            className="secondary"
            onClick={handleSelectText}
          >
            Select Text
          </button>
          <button
            type="button"
            className="danger"
            onClick={onClearNotes}
          >
            Clear All
          </button>
        </div>
      </form>

      <div className="status-banner" style={{ marginTop: "14px" }}>
        <strong>Ref Action:</strong> {statusMessage}
      </div>

      {notes.length > 0 && (
        <ul className="note-list">
          {notes.map((note, index) => (
            <li key={index} className="note-item">
              {note}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FocusInputCard;
```

### 3. Persistent Mutable Values & Interval IDs

File: `src/components/TimerTrackerCard.jsx`

```jsx
import { useRef, useState } from "react";

function TimerTrackerCard() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [syncedClicks, setSyncedClicks] = useState(0);

  const timerIdRef = useRef(null);
  const silentClicksRef = useRef(0);

  function handleStart() {
    if (timerIdRef.current !== null) return;

    setIsRunning(true);
    timerIdRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
    setIsRunning(false);
  }

  function handleReset() {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
    setIsRunning(false);
    setSeconds(0);
  }

  function handleSilentClick() {
    silentClicksRef.current += 1;
    console.log("Silent Ref Clicks (no re-render):", silentClicksRef.current);
  }

  function handleSyncClicks() {
    setSyncedClicks(silentClicksRef.current);
  }

  return (
    <div className="card">
      <h2>2. Mutable Values Without Re-Renders</h2>

      <div className="stats-grid">
        <div className="stat-box">
          <span className="stat-label">Stopwatch (useState)</span>
          <span className="stat-value">{seconds}s</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Synced Ref Clicks</span>
          <span className="stat-value">{syncedClicks}</span>
        </div>
      </div>

      <div className="button-group">
        <button
          className="success"
          onClick={handleStart}
          disabled={isRunning}
        >
          Start Timer
        </button>

        <button className="danger" onClick={handleStop}>
          Stop Timer
        </button>

        <button className="secondary" onClick={handleReset}>
          Reset Timer
        </button>

        <button onClick={handleSilentClick}>
          Silent Ref Click (+1)
        </button>

        <button className="secondary" onClick={handleSyncClicks}>
          Sync Ref Count
        </button>
      </div>

      <div className="status-banner" style={{ marginTop: "14px" }}>
        <strong>Tip:</strong> Click <em>Silent Ref Click (+1)</em> three times —
        the number on screen stays at 0 because <code>useRef</code> updates
        silently in memory. Click <em>Sync Ref Count</em> to read{" "}
        <code>silentClicksRef.current</code> and display it!
      </div>
    </div>
  );
}

export default TimerTrackerCard;
```

## How It Works

1. `App.jsx` maintains the `notes` list in `useState` and uses `appRenderCount = useRef(0)` paired with `useEffect` to count how many times `App` has rendered without triggering extra re-renders.
2. `FocusInputCard.jsx` attaches `ref={inputRef}` to the `<input>` tag so button handlers can call native browser DOM methods (`focus()` and `select()`).
3. `TimerTrackerCard.jsx` stores the `setInterval` ID inside `timerIdRef.current` so `Stop Timer` and `Reset Timer` can cancel the active interval across renders.
4. `silentClicksRef.current` increments silently on click without triggering a component re-render until `Sync Ref Count` copies `.current` into `syncedClicks` (`useState`).

## Key Takeaways

- Use **`useState`** for any value that should immediately update the screen when changed.
- Use **`useRef`** for values that must survive across re-renders without causing a re-render (DOM nodes, interval/timeout IDs, previous values).
- In React 19, always read or mutate `ref.current` inside **event handlers** or **`useEffect`**—never directly inside the component render body or JSX.

## Technologies Used

- React 19
- Vite
- JavaScript (ES6+)
- CSS3
- React `useRef`, `useEffect`, & `useState` Hooks

## Status

Completed - Day 135