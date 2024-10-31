import React from 'react';

const todoList = [
    { id: 1, title: 'walk dog' },
    { id: 2, title: 'Iron clothes' },
    { id: 3, title: 'go for run' }
];

function TodoList() {
    return (
        <ul>
        {todoList.map(todo =>
          <li key={todo.id}>{todo.title}</li>
        )}
      </ul>
    );
}

export default TodoList;
