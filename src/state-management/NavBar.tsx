import { useContext } from "react";
import TasksContext from "./contexts/tasksContext";
import LoginStatus from "./LoginStatus";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">6</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
