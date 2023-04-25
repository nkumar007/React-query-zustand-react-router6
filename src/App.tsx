import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { AuthProvider } from "./state-management/auth";
import { TaskProvider } from "./state-management/task";
import Counter from "./state-management/counter/Counter";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
