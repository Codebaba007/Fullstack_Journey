// src/App.jsx

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

  // Stable callback reference across all renders
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

  // Stable toggle callback using functional state update
  const handleToggleTask = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  // Stable delete callback
  const handleDeleteTask = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  // Stable clear-completed callback
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

      <TaskInputCard
        onAddTask={handleAddTask}
        onClearCompleted={handleClearCompleted}
        completedCount={completedCount}
      />

      <TaskListCard
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;