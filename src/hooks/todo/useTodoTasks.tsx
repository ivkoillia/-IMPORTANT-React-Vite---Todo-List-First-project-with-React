import { useTodoStore, selectRenderedTasks, selectFirstIncompleteTaskId } from "../../store/useTodoStore"
import { useShallow } from "zustand/react/shallow";


const useTodoTasks = () => {
  return useTodoStore(
    useShallow((state) => ({
      tasks: selectRenderedTasks(state),
      firstIncompleteTaskId: selectFirstIncompleteTaskId(state),
    }))
  );
};

export default useTodoTasks;