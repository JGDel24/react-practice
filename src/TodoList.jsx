import React from "react";

const todoList = [
    { id: 1, title: 'finish homework' },
    { id: 2, title: 'walk dog' },
    { id: 3, title: 'read book' }
]

function TodoList() {
    return (
        <ul>
            {todoList.map(toDo => (
                <li key={toDo.id}>{toDo.title}</li>
            )

            )}
        </ul>
    )
}

export default TodoList