import TodoAddForm from "../TodoAddForm"
import TodoHeader from "../TodoHeader"
import TodoList from "../TodoList"
import TodoSearchForm from "../TodoSearchForm"
import TodoTasksInfo from "../TodoTasksInfo"
import Button from "../../ui/Button"

import { useEffect } from "react"
import { useTodoStore } from "../../../store/useTodoStore"

function Todo () {
  const loadTasks = useTodoStore((state) => state.loadTasks);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const scrollToFirstIncompleteTask = () => {
    const element = document.querySelector(`[data-js-attention-task="true"]`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <section className="main__todo todo">
        <TodoHeader />
        <TodoAddForm/>
        <TodoSearchForm/>
        <div className="todo__tasks">
          <TodoTasksInfo/>
          <Button type="button" onClick={scrollToFirstIncompleteTask}>Scroll to first incomplete task</Button>
          <TodoList/>
        </div>
    </section>
  )
}


export default Todo