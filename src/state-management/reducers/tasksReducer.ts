interface Task {
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

type TaskAction = AddAction | DeleteAction;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [...tasks, action.task];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

export default tasksReducer;
