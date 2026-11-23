// src/components/ChatFeedCard.jsx

import { useEffect, useRef, useState } from "react";

function ChatFeedCard({ messages, onAddMessage, onResetMessages }) {
  const [draft, setDraft] = useState("");

  // DOM refs for top marker, bottom marker, and text input
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Automatically scroll to the bottom marker whenever a new message is added
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
        {/* Invisible top anchor */}
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

        {/* Invisible bottom anchor */}
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