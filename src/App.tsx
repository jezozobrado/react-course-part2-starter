import { useReducer } from "react";
import "./App.css";
import NavBar from "./state-management/NavBar";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import TasksContext from "./state-management/context/tasksContext";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <TaskList />
      </TasksContext.Provider>
    </>
  );
}

export default App;
