// src/components/TimerTrackerCard.jsx

import { useRef, useState } from "react";

function TimerTrackerCard() {
  // useState: controls what the user sees on screen
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [syncedClicks, setSyncedClicks] = useState(0);

  // useRef #1: stores the interval ID across renders without triggering re-renders
  const timerIdRef = useRef(null);

  // useRef #2: counts silent background clicks without re-rendering the card
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