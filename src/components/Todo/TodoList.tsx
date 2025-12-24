import Task from "./Task"

import useTodoTasks from "../../hooks/todo/useTodoTasks";


function TodoList () {

  const { tasks, firstIncompleteTaskId } = useTodoTasks();

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