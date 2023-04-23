import { useReducer } from "react";
import tasksReducer from "./tasksReducer";

const useTasks = () => useReducer(tasksReducer, []);

export default useTasks;
