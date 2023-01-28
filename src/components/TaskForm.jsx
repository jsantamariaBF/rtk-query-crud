import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateTaskMutation } from "../api/apiSlice";

const TaskForm = () => {
  const [isDisable, setIsDisable] = useState(true);
  const [createTask] = useCreateTaskMutation();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = e.target.elements.completed.checked;
    createTask({ name, description, completed });
    navigate('/tasks');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={(e) => e.target.value.length > 0 ? setIsDisable(false) : null} />
        <input type="text" name="description" />
        <input type="checkbox" name="completed" />
        <button disabled={isDisable} type="submit">Add Task</button>
      </form>

    </div>
  );
};

export default TaskForm;
