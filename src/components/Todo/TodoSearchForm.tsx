import { memo } from "react"
import Input from "../Input"
import { useTodoStore } from "../../store/useTodoStore";


function TodoSearchForm () {

  const onSearch = useTodoStore((state) => state.setSearchTaskInputQuery);

  return (
    <form className="todo__search_form" onSubmit = {(e) => e.preventDefault()}>
      <Input type="search" placeholder="Search task" className="todo__search" onInput={ onSearch ? (query) => onSearch(query) : undefined}/>
    </form>
  )
}


export default memo(TodoSearchForm)