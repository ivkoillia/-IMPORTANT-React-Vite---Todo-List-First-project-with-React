import Task from "./Task"
import { useShallow } from 'zustand/react/shallow';

import { useTodoStore, selectRenderedTasks, selectFirstIncompleteTaskId } from "../../store/useTodoStore"

function TodoList () {

  const tasks = useTodoStore(useShallow(selectRenderedTasks));
  const firstIncompleteTaskId = useTodoStore(selectFirstIncompleteTaskId);

  return (
    <ul className="todo__list">
      {tasks.map(task => {
        return (
          <Task key={task.id} task={task} attention={(firstIncompleteTaskId === task.id) ? true : undefined } />
        )
      })}
    </ul>
  )
}

export default TodoList