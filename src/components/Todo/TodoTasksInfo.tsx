import Button from "../ui/Button";

import useTodoTasksActions from "../../hooks/todo/useTodoTasksActions";
import useTodoTasksStats from "../../hooks/todo/useTodoTasksStats";

function TodoTasksInfo (){

  const { completed, total, remaining, percent } = useTodoTasksStats();
  const { clearTasks } = useTodoTasksActions();

  const clearHandler = () => {
    if (window.confirm('Вы уверены, что хотите удалить все задачи?')) {
      clearTasks();
    }
  };

  return (
    <div className="todo__tasks-info">
      <div className="todo__tasks-counter">
        <span className="todo__tasks-counter-completed">{completed}</span> of <span className="todo__tasks-counter-total">{total}</span> tasks completed ( <span className="todo__tasks-counter-remaining">{remaining} tasks {100 - percent}%</span> remaining )
      </div>
      <div className="todo__tasks-clear">
        <Button type="button" className="todo__tasks-clear_button" ariaLabel="delete all tasks button" onClick={clearHandler}>Delete All</Button>
      </div>
    </div>
  )
}


export default TodoTasksInfo