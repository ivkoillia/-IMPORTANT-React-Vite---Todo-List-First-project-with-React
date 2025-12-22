import { useTodoStore } from "../../store/useTodoStore";
import { useShallow } from "zustand/react/shallow";




const useTodoSearchTaskInputQuery = () => {
    return useTodoStore(useShallow((state) => ({
        setInput: state.setSearchTaskInputQuery,
        inputValue: state.searchTaskInputQuery,
    })));
}

export default useTodoSearchTaskInputQuery;