import "./App.css";
import AuthProvider from "./state-management/auth/AuthProvider";
import LoginStatus from "./state-management/auth/LoginStatus";

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
