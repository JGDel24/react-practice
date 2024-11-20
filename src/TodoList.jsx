import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
    { id: 1, title: 'finish homework' },
    { id: 2, title: 'walk dog' },
    { id: 3, title: 'read book' }
]

function TodoList() {
    return (
        <ul>
            {todoList.map(toDo => (
                <TodoListItem key={toDo.id} toDo={toDo} />
            )

            )}
        </ul>
    )
}

export default TodoList