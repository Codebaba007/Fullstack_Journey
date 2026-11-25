// src/components/TaskListCard.jsx

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