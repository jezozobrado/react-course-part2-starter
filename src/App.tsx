import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";

function App() {
  return (
    <>
      <AuthProvider>
        <LoginStatus />
      </AuthProvider>
    </>
  );
}

export default App;
