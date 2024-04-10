import Task from "./Task.js";
import { useTasks } from "./TasksContext.js";

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul className="ulItem">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
