import { memo } from "react";
import Button from "../Button";

function TodoTasksInfo 
  ( { tasksCounter, completedTasksCounter, onDeleteTasks } 
  : 
  { tasksCounter: number; completedTasksCounter: number; onDeleteTasks?: () => void } ) 
  {
  
  return (
    <div className="todo__tasks-info">
      <div className="todo__tasks-counter">
        <span className="todo__tasks-counter-completed">{completedTasksCounter}</span> of <span className="todo__tasks-counter-total">{tasksCounter}</span> tasks completed
      </div>
      <div className="todo__tasks-clear">
        <Button type="button" className="todo__tasks-clear_button" ariaLabel="delete all tasks button" onClick={onDeleteTasks}>Delete All</Button>
      </div>
    </div>
  )
}


export default memo(TodoTasksInfo)