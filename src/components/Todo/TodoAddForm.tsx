import { memo } from "react";

import Button from "../Button"
import Input from "../Input"

function TodoAddForm (
  { onSubmit, inputRef } 
  : 
  { onSubmit?: () => void, inputRef?: React.RefObject<HTMLInputElement | null> } )
  {

  console.log( "Render TodoAddForm" )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement >) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit();
    }
  }

  return (
    <form onSubmit={ e => handleSubmit(e)} className="todo__add_form">
      <Input ref={inputRef} name="title" type="text" placeholder="New task description" className="todo__add_form-input" />
      <Button type="submit" className="todo__add_form-submit" ariaLabel="add new task button">Add</Button>
    </form>
  )
}


export default memo(TodoAddForm)