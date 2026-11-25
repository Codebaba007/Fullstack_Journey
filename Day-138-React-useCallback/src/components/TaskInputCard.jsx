// src/components/TaskInputCard.jsx

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