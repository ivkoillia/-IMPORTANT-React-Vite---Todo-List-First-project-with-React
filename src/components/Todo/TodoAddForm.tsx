import { memo } from "react";

import Button from "../Button"
import Input from "../Input"

import { useTodoStore } from "../../store/useTodoStore"

function TodoAddForm ()
  {

  const onSubmit = useTodoStore((state) => state.addTask);
  const inputValue = useTodoStore((state) => state.addTaskInputQuery);
  const onInput = useTodoStore((state) => state.setAddTaskInputQuery);

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