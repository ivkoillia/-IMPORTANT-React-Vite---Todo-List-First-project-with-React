import { memo, type ChangeEvent } from "react"
import Input from "../ui/Input"

import useTodoSearchTaskInputQuery from "../../hooks/todo/useTodoSearchTaskInputQuery";


function TodoSearchForm() {
  const { inputValue: searchQuery, setInput: onSearch } = useTodoSearchTaskInputQuery();

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
        onChange={handleChange} // Передаем значение из события в стор
      />
    </form>
  );
}

export default memo(TodoSearchForm)