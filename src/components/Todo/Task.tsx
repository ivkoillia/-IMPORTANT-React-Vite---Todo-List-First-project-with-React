import { forwardRef, memo } from "react";

import Button from "../Button"
import Input from "../Input"

import type { ITaskProps } from "../../types"


const Task = forwardRef<HTMLLIElement, ITaskProps>((
  { task, onToggle, onDelete }, 
  ref
) => {
  console.log( "Render Task" )

  return (
    <li ref={ref} className="task">
      <label htmlFor={`task-${task.id}`} className="task__label">
        <Input type="checkbox" checked={task.isCompleted} id={`task-${task.id}`} ariaLabel={`Mark task ${task.title} as completed`} onChange={() => onToggle(task.id)} />
        <span className="task__title">{task.title}</span>
      </label>
      <Button type="button" className="task__delete_button" ariaLabel={`Delete task ${task.title}`} onClick={ () => onDelete(task.id)}>Delete</Button>
    </li>
  )
})

export default memo(Task)