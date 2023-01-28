import { Route, Routes } from "react-router-dom";

import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/form" element={<TaskForm />} />
        <Route path="/tasks" element={<TasksList />} />
      </Routes>
    </>
  );
};

export default App;
