import { memo } from "react";

function TodoHeader () {

    return (
        <header className="todo__header">
            <h1 className="todo__title">To Do List</h1>
        </header>
    )
}



export default memo(TodoHeader)