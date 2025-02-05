import { Dispatch } from "react";
import React from "react";
import { Task, TaskAction } from "./useTasks";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TasksContext;
