# Day 138 - React `useCallback` (Stabilizing Function References)

## Overview

This project introduces React's **`useCallback`** hook to preserve referential equality for callback functions across component re-renders. By wrapping task mutation handlers (`handleAddTask`, `handleToggleTask`, `handleDeleteTask`, `handleClearCompleted`) in `useCallback` and combining them with functional state updates (`setTasks((prevTasks) => ...)`), child components receive identical function references even when unrelated state updates occur in `App.jsx`.

The application allows users to:

- Add new tasks via a controlled input form (`TaskInputCard.jsx`).
- Toggle task completion status, delete individual tasks, and clear completed items (`TaskListCard.jsx`).
- Maintain stable callback function identities across re-renders using `useCallback(..., [])`.
- Trigger unrelated re-renders in `App.jsx` (`themeClicks`) without recreating task handler functions.

## Concepts Learned

- Caching function references across renders with `useCallback(fn, [dependencies])`
- Understanding referential equality (`fnA === fnB`) in JavaScript and why inline/component functions recreate on every render
- Using functional state updates (`setTasks((prev) => ...)`) inside `useCallback` to keep dependency arrays empty (`[]`) without stale state bugs
- Distinguishing `useMemo` (caches a computed value) from `useCallback` (caches a function definition)
- Preparing stable callback props for `React.memo` child optimization

## Project Structure

```text
Day-138-React-useCallback/
├── src/
│   ├── components/
│   │   ├── TaskInputCard.jsx
│   │   └── TaskListCard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Implementation

### 1. Root Component & Memoized Task Handlers

File: `src/App.jsx`

```jsx
import { useCallback, useState } from "react";
import "./App.css";
import TaskInputCard from "./components/TaskInputCard";
import TaskListCard from "./components/TaskListCard";

const initialTasks = [
  { id: 1, title: "Review Day 137 useMemo caching", completed: true },
  { id: 2, title: "Stabilize callbacks with useCallback", completed: false },
  { id: 3, title: "Prepare for React Router on Day 140", completed: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [themeClicks, setThemeClicks] = useState(0);

  const handleAddTask = useCallback((rawTitle) => {
    const cleanTitle = rawTitle.trim();
    if (!cleanTitle) return;

    const newTask = {
      id: Date.now(),
      title: cleanTitle,
      completed: false,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }, []);

  const handleToggleTask = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const handleDeleteTask = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  const handleClearCompleted = useCallback(() => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  }, []);

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="container">
      <h1>Stabilizing Callbacks (useCallback)</h1>

      <div className="card">
        <h2>App Level Status</h2>
        <p>
          Total Tasks: <strong>{tasks.length}</strong> | Completed:{" "}
          <strong>{completedCount}</strong>
        </p>
        <p>
          Unrelated UI Toggles: <strong>{themeClicks}</strong>
        </p>

        <div className="button-group">
          <button
            className="secondary"
            onClick={() => setThemeClicks((prev) => prev + 1)}
          >
            Trigger App Re-Render ({themeClicks})
          </button>
        </div>
      </div>

      <TaskInputCard completedCount="{completedCount}" onAddTask="{handleAddTask}" onClearCompleted="{handleClearCompleted}"/>

      <TaskListCard onDeleteTask="{handleDeleteTask}" onToggleTask="{handleToggleTask}" tasks="{tasks}"/>
    </div>
  );
}

export default App;
```

### 2. Task Creation Component

File: `src/components/TaskInputCard.jsx`

```jsx
import { useState } from "react";

function TaskInputCard({ onAddTask, onClearCompleted, completedCount }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim()) return;

    onAddTask(title);
    setTitle("");
  }

  return (
    <div className="card">
      <h2>1. Add Task (Memoized Callback)</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="task-title">Task Title</label>
          <input
            id="task-title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. Practice React.memo tomorrow..."
          />
        </div>

        <div className="button-group">
          <button type="submit" className="success">
            Add Task
          </button>

          {completedCount > 0 && (
            <button
              type="button"
              className="danger"
              onClick={onClearCompleted}
            >
              Clear Completed ({completedCount})
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TaskInputCard;
```

### 3. Task Queue Display Component

File: `src/components/TaskListCard.jsx`

```jsx
function TaskListCard({ tasks, onToggleTask, onDeleteTask }) {
  const remainingCount = tasks.filter((t) => !t.completed).length;
  const completedCount = tasks.length - remainingCount;

  return (
    <div className="card">
      <h2>2. Task Queue</h2>

      <div className="stats-grid">
        <div className="stat-box">
          <span className="stat-label">Total</span>
          <span className="stat-value">{tasks.length}</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Remaining</span>
          <span className="stat-value">{remainingCount}</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Done</span>
          <span className="stat-value">{completedCount}</span>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="status-banner">
          No tasks in the list. Add one above to get started!
        </div>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-item ${task.completed ? "completed" : ""}`}
            >
              <span className="task-title">{task.title}</span>

              <div className="task-actions">
                <button
                  type="button"
                  className="secondary small"
                  onClick={() => onToggleTask(task.id)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>

                <button
                  type="button"
                  className="danger small"
                  onClick={() => onDeleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskListCard;
```

## How It Works

1. `App.jsx` holds `tasks` and an unrelated `themeClicks` counter in `useState`.
2. `handleAddTask`, `handleToggleTask`, `handleDeleteTask`, and `handleClearCompleted` are wrapped in `useCallback(..., [])`, ensuring React creates each function once on mount and reuses the exact same memory reference on every subsequent render.
3. Because each handler uses functional state updates (`setTasks((prevTasks) => ...)`), none of them need `tasks` in their dependency array.
4. `TaskInputCard` manages local input typing with `useState` and calls the stable `onAddTask` and `onClearCompleted` props.
5. `TaskListCard` renders task counts and rows, invoking `onToggleTask(task.id)` and `onDeleteTask(task.id)` without triggering function recreation in `App.jsx`.

## Key Takeaways

- `useCallback(fn, deps)` returns a memoized **function reference**, whereas `useMemo(() => value, deps)` returns a memoized **computed value**.
- Pairing `useCallback` with functional state updates (`setState((prev) => ...)`) eliminates state dependencies so callbacks remain permanently stable (`[]`).
- `useCallback` is most effective when passing callbacks to `React.memo`-wrapped children or listing functions inside `useEffect` dependency arrays.

## Technologies Used

- React 19
- Vite
- JavaScript (ES6+)
- CSS3
- React `useCallback` & `useState` Hooks

## Status

Completed - Day 138