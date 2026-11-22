// src/components/FocusInputCard.jsx

import { useRef, useState } from "react";

function FocusInputCard({ notes, onAddNote, onClearNotes }) {
  const [text, setText] = useState("");
  const [statusMessage, setStatusMessage] = useState(
    "Click 'Focus Input' to jump cursor straight into the box."
  );

  // 1. Create a ref box initialized to null (will hold the <input> DOM node)
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
    // Automatically keep cursor inside the input for rapid note entry
    inputRef.current.focus();
    setStatusMessage(`Added "${text.trim()}" and kept input focused!`);
  }

  return (
    <div className="card">
      <h2>1. DOM Access with useRef</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="quick-note">Quick Note Input</label>
          {/* 2. Attach inputRef to the real DOM element */}
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