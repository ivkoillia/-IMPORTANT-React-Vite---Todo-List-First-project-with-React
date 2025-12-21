// import type { ITask } from "../../types";
// import { type ReactNode } from "react";
// import { TasksContext } from "../TodoContext";


// // 4. Провайдер-обертка
// export const TasksProvider = ({ children }: { children: ReactNode }) => {
//   const tasks: ITask[] = []; // Тут будет твоя логика useState из Todo.tsx

//   return (
//     <TasksContext.Provider value={{ tasks }}>
//       {children}
//     </TasksContext.Provider>
//   );
// };