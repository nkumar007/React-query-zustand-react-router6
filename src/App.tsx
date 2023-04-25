import "./App.css";
import AuthProvider from "./state-management/AuthProvider";

import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <HomePage />
    </AuthProvider>
  );
}

export default App;
