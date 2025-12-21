import { memo, type ChangeEvent } from "react"
import Input from "../Input"
import { useTodoStore } from "../../store/useTodoStore";


function TodoSearchForm() {
  const onSearch = useTodoStore((state) => state.setSearchTaskInputQuery);
  const searchQuery = useTodoStore((state) => state.searchTaskInputQuery);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <form className="todo__search_form" onSubmit={(e) => e.preventDefault()}>
      <Input 
        type="search" 
        placeholder="Search task" 
        className="todo__search" 
        value={searchQuery} // Делаем поиск контролируемым
        onInput={handleChange} // Передаем значение из события в стор
      />
    </form>
  );
}

export default memo(TodoSearchForm)