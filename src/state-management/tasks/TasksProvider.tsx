import { ReactNode } from "react";
import TasksContext from "./tasksContext";
import useTasks from "./useTasks";

export interface Task {
  id: number;
  title: string;
}

interface AddAction {
  type: "ADD";
  task: Task;
}

interface DeleteAction {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddAction | DeleteAction;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [...tasks, action.task];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

interface Props {
  children: ReactNode;
}
const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useTasks();
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
