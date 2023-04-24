import { useReducer } from "react";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import tasksReducer from "./state-management/reducers/tasksReducer";
import TasksContext from "./state-management/contexts/tasksContext";
import "./App.css";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  );
}

export default App;
