interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

type TaskAction = AddTask | DeleteTask;

interface Action {
  type: string;
}

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [...tasks, action.task];
    case "DELETE":
      return tasks.filter((task) => task.id !== action.taskId);
  }
};

export default tasksReducer;
