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
  const { data: data2, isLoading: data2Loading } = useGetTasksByIdQuery(1);

  const navigate = useNavigate();

  if (isLoading || data2Loading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;


  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.name}</h3>
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
      <div>
        {data2.name}
      </div>
    </ul>
  );
};

export default TasksList;
