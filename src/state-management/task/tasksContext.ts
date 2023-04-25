import React from "react";
import { Dispatch } from "react";
import { Task, taskAction } from "./TaskProvider";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<taskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TasksContext;
