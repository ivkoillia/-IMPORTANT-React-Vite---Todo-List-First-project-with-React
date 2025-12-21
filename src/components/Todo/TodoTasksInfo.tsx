import { memo } from "react";
import Button from "../Button";

import { useTodoStore, selectTasksLength, selectCompletedTasksLength  } from "../../store/useTodoStore";

function TodoTasksInfo (){

  const tasksLength = useTodoStore(selectTasksLength);
  const completedTasksCounter = useTodoStore(selectCompletedTasksLength);

  const clearTasks = useTodoStore((state) => state.clearTasks);

  const clearHandler = () => {
    if (window.confirm('Вы уверены, что хотите удалить все задачи?')) {
      clearTasks();
    }
  };

  return (
    <div className="todo__tasks-info">
      <div className="todo__tasks-counter">
        <span className="todo__tasks-counter-completed">{completedTasksCounter}</span> of <span className="todo__tasks-counter-total">{tasksLength}</span> tasks completed
      </div>
      <div className="todo__tasks-clear">
        <Button type="button" className="todo__tasks-clear_button" ariaLabel="delete all tasks button" onClick={clearHandler}>Delete All</Button>
      </div>
    </div>
  )
}


export default memo(TodoTasksInfo)