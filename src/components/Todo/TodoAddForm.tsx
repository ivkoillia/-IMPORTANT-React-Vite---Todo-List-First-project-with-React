import { memo } from "react";

import Button from "../ui/Button"
import Input from "../ui/Input"

import useTodoTasksActions from "../../hooks/todo/useTodoTasksActions"
import useTodoAddTaskInputQuery from "../../hooks/todo/useTodoAddTaskInputQuery";


function TodoAddForm ()
  {

  const { addTask: onSubmit } = useTodoTasksActions();
  const { inputValue: inputValue, setInput: onInput } = useTodoAddTaskInputQuery();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement >) => {
    e.preventDefault();

    if (onSubmit && inputValue.trim()) {
      onSubmit( inputValue );
    }
  }

  return (
    <form onSubmit={ handleSubmit} className="todo__add_form">
      <Input value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInput(e.target.value)} name="title" type="text" placeholder="New task description" className="todo__add_form-input" />
      <Button type="submit" className="todo__add_form-submit" ariaLabel="add new task button">Add</Button>
    </form>
  )
}


export default memo(TodoAddForm)