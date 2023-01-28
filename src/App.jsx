import { Route, Routes } from "react-router-dom";

import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import TaskById from "./TaskById";

import './App.css';
import Home from "./Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/form" element={<TaskForm />} />
        <Route path="/tasks" element={<TasksList />} />
        <Route path="/tasks/:id" element={<TaskById />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
