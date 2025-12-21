import { memo } from "react";

import Button from "../Button"
import Input from "../Input"

import { useTodoStore } from "../../store/useTodoStore"

function TodoAddForm ()
  {

  const onSubmit = useTodoStore((state) => state.addTask);
  const onInput = useTodoStore((state) => state.setAddTaskInputQuery);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement >) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit();
    }
  }

  return (
    <form onSubmit={ e => handleSubmit(e)} className="todo__add_form">
      <Input onInput={onInput} name="title" type="text" placeholder="New task description" className="todo__add_form-input" />
      <Button type="submit" className="todo__add_form-submit" ariaLabel="add new task button">Add</Button>
    </form>
  )
}


export default memo(TodoAddForm)