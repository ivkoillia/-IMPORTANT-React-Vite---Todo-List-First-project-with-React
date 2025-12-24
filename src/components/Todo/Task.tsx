import { memo } from "react";
import { Link } from '@tanstack/react-router'

import Button from "../ui/Button"
import Input from "../ui/Input"

import type { ITaskProps } from "../../types/Todo/types"
import { useTodoStore } from "../../store/useTodoStore"


const Task = ( { task, attention } : ITaskProps ) => {
  const onToggle = useTodoStore((state) => state.toggleTask);
  const onDelete = useTodoStore((state) => state.deleteTask);

  return (
    <li data-js-attention-task={attention} className="task">
      <label htmlFor={`task-${task.id}`} className="task__label">
        <Input type="checkbox" checked={task.isCompleted} id={`task-${task.id}`} ariaLabel={`Mark task ${task.title} as completed`} onChange={() => onToggle(task.id)} />
        <Link to={`/tasks/$taskId`} params = { { taskId: task.id } } className="task__details_link"><span className="task__title">{task.title}</span></Link>
      </label>
      <Button type="button" className="task__delete_button" ariaLabel={`Delete task ${task.title}`} onClick={ () => onDelete(task.id)}>Delete</Button>
    </li>
  )
}  



export default memo(Task)