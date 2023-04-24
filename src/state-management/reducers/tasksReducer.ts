export interface Task {
  id: number;
  title: string;
}

interface ADD {
  type: "ADD";
  task: Task;
}

interface DELETE {
  type: "DELETE";
  taskId: number;
}

export type taskAction = ADD | DELETE;

const tasksReducer = (tasks: Task[], action: taskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

export default tasksReducer;
