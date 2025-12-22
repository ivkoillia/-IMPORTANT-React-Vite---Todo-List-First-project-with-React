import { useTodoStore } from "../../store/useTodoStore"; 
import { useShallow } from "zustand/react/shallow";



const useTodoAddTaskInputQuery = () => {
    return useTodoStore(useShallow((state) => ({
        setInput: state.setAddTaskInputQuery,
        inputValue: state.addTaskInputQuery,
    })));
}

export default useTodoAddTaskInputQuery;