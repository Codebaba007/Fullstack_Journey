// src/App.jsx

import { useEffect, useRef, useState } from "react";
import "./App.css";
import FocusInputCard from "./components/FocusInputCard";
import TimerTrackerCard from "./components/TimerTrackerCard";

function App() {
  const [notes, setNotes] = useState(["Learn useRef basics"]);
  const [renderMessage, setRenderMessage] = useState(
    "Click the button below to inspect the silent render count."
  );

  // Ref box initialized to 0
  const appRenderCount = useRef(0);

  // Safe in React 19: useEffect runs AFTER render completes
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

      <FocusInputCard
        notes={notes}
        onAddNote={addNote}
        onClearNotes={clearNotes}
      />

      <TimerTrackerCard />
    </div>
  );
}

export default App;