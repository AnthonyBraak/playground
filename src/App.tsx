import { useState } from "react";
import Task from "./components/Task";
import type { Task as TaskType } from "./types";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: "Learn Japanese", completed: false },
    { id: 2, title: "Learn English", completed: true },
    { id: 3, title: "Learn React", completed: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  return (
    <div className="container">
      <h1 className="heading">
        Always do your <span className="heading-special">Tasks</span> on time
      </h1>
      <h3>
        The number of Tasks finished is {completedCount} of {tasks.length}!
      </h3>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}

export default App;
