import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";

import { TaskProvider } from "./state-management/task";
import Counter from "./state-management/counter/Counter";

function App() {
  return (
    <TaskProvider>
      <Counter />
      <NavBar />
      <HomePage />
    </TaskProvider>
  );
}

export default App;
