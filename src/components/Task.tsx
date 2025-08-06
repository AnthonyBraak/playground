import type { Task as TaskType } from "../types";

type TaskProps = {
  task: TaskType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const Task = ({ task, onToggle, onDelete }: TaskProps) => {
  const handleToggle = () => {
    onToggle(task.id);
  };
  const handleDelete = () => {
    onDelete(task.id);
  };
  return (
    <div className={task.completed === true ? "done" : "undone"}>
      <button onClick={handleToggle}>{task.completed ? "O" : "X"}</button>
      <span>{task.title}</span>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

export default Task;
