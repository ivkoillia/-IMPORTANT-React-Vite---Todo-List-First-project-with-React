import { createContext, useContext } from "react";
import type { ITask } from "../types";

// 1. Описываем тип данных в контексте
interface TasksContextType {
  tasks: ITask[];
  // ... методы
}

// 2. Создаем контекст с начальным значением null
export const TasksContext = createContext<TasksContextType | null>(null);

// 3. Создаем кастомный хук для использования (Middle-стандарт)
export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};

