import type { ITask } from "../../types"
import Task from "./Task"

function TodoList (
  { tasks, onDeleteTask, onToggleTask, firstIncompleteTaskRef, firstIncompleteTask } 
  : 
  { tasks: ITask[], onDeleteTask: (id: string) => void, onToggleTask: (id: string) => void, firstIncompleteTaskRef: React.RefObject<HTMLLIElement | null>, firstIncompleteTask: ITask | undefined } ) {

  console.log( "Render TodoList" )

  return (
    <ul className="todo__list">
      {tasks.map(task => {
        if ( firstIncompleteTask && task.id === firstIncompleteTask.id ) {
          return (
            <Task key={task.id} task={task} onDelete={onDeleteTask} onToggle={onToggleTask} ref={firstIncompleteTaskRef} />
          )
        } else {
          return (
            <Task key={task.id} task={task} onDelete={onDeleteTask} onToggle={onToggleTask} />
          )
        }
      })}
    </ul>
  )
}

export default TodoList