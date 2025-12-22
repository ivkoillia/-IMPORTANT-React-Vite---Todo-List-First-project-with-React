import { useShallow } from "zustand/react/shallow";
import { useTodoStore } from "../../store/useTodoStore";



const useTodoTasksActions = () => {
  return useTodoStore(
    useShallow((state) => ({
      toggleTask: state.toggleTask,
      deleteTask: state.deleteTask,
      clearTasks: state.clearTasks,
      addTask: state.addTask,
    }))
  );
};

export default useTodoTasksActions