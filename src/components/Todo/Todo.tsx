import TodoAddForm from "./TodoAddForm"
import TodoHeader from "./TodoHeader"
import TodoList from "./TodoList"
import TodoSearchForm from "./TodoSearchForm"
import TodoTasksInfo from "./TodoTasksInfo"
import Button from "../Button"

import type { ITask } from "../../types"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"



function Todo () {
  // useRef, useEffect, useState hooks

  const [ tasks, setTasks ] = useState<ITask[]>( () => 
    JSON.parse( localStorage.getItem( "tasks" ) ?? "[]" )
  );

  const [ searchQuery, setSearchQuery ] = useState<string>( "" );

  useEffect( () => {
      localStorage.setItem( "tasks", JSON.stringify( tasks ) )
  }, [ tasks ] )

  const addTaskInputRef = useRef<HTMLInputElement>( null );

  const firstIncompleteTaskRef = useRef<HTMLLIElement>( null );
  
  // derived state ( UseMemo included )
  
  const renderedTasks = useMemo(() => {
    return tasks.filter(task => 
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [tasks, searchQuery]);

  const firstIncompleteTask = tasks.find(task => !task.isCompleted);

  const completedTasksCounter = tasks.filter(task => task.isCompleted).length;


  // handlers ( useCallback included )

  /**
  * Handler for adding a new task
  * This function creates a new task object and updates the tasks state
  * This function also clears the input field after adding the task
  * @returns void
  */
  const onAddTask = useCallback(()  => {
      if ( addTaskInputRef.current?.value.trim() === "" ) { return; }

      const newTask : ITask = {
          id: crypto?.randomUUID() ?? Math.random().toString(36).substring(2, 9),
          title: addTaskInputRef.current?.value ?? "Empty task",
          isCompleted: false
      }
      setTasks( prevTasks => [ ...prevTasks, newTask ] );

      if ( addTaskInputRef.current ) {
          addTaskInputRef.current.value = "";
      }
  }, [addTaskInputRef] )

  /** 
   * Handler for deleting all tasks
   * This function clears the tasks state
   * @returns void
   */
  const onDeleteTasks = useCallback( () => {
      setTasks( [] )
  }, [] )


  /**
  * Handler for deleting a task
  * This function removes a task from the tasks state based on its id
  * @param {string} id - The id of the task to be deleted
  * @returns void
  */
  const onDeleteTask = useCallback( (id: string) => {
      setTasks( prevTasks => prevTasks.filter( task => task.id !== id ) )
  }, [] )

  /**
  * Handler for toggling a task's completion status
  * This function updates the isCompleted property of a task based on its id
  * @param {string} id - The id of the task to be toggled
  * @returns void
  */
  const onToggleTask = useCallback( (id: string) => {
      setTasks( prevTasks => prevTasks.map( task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task ) )
  }, [] )

  /** 
   * Handler for scrolling to the first incomplete task
   * This function uses the firstIncompleteTaskRef to scroll the task into view
   * @returns void
   */
  const scrollToFirstIncompleteTask = () => {
      firstIncompleteTaskRef.current?.scrollIntoView( { behavior: "smooth", block: "center" } );
  }

  return (
      <main className="main">
      <section className="main__todo todo">
          <TodoHeader />
          <TodoAddForm inputRef={addTaskInputRef} onSubmit={onAddTask} />
          <TodoSearchForm onSearch={setSearchQuery} />
          <div className="todo__tasks">
            <TodoTasksInfo tasksCounter={tasks.length} completedTasksCounter={completedTasksCounter} onDeleteTasks={onDeleteTasks} />
            <Button type="button" onClick={scrollToFirstIncompleteTask}>Scroll to first incomplete task</Button>
            <TodoList firstIncompleteTask={firstIncompleteTask} firstIncompleteTaskRef={firstIncompleteTaskRef}  onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} tasks={renderedTasks} />
          </div>
      </section>
      </main>
  )
}


export default Todo