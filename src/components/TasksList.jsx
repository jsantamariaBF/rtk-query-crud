import { useNavigate } from "react-router-dom";

import {
  useDeleteTaskMutation,
  useGetTasksByIdQuery,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../api/apiSlice";

const TasksList = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3 style={{ cursor: 'pointer' }} onClick={() => navigate(`/tasks/${task.id}`)}>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => { deleteTask(task.id) }}>
            Delete
          </button>
          <button style={{ marginLeft: 5, marginRight: 5 }} onClick={() => navigate('/form')}>
            Create
          </button>

          <input
            type="checkbox"
            id={task.id}
            checked={task.completed}
            onChange={(e) => { updateTask({ ...task, completed: e.target.checked }) }}
          />
          <label htmlFor={task.id}>Completed</label>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
