import { useTodoStore, selectTasksStats  } from "../../store/useTodoStore";
import { useShallow } from "zustand/react/shallow";



const useTodoTasksStats = () => {
    return useTodoStore(useShallow(selectTasksStats));
}

export default useTodoTasksStats;