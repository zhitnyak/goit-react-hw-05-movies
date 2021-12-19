import React from 'react';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li key={id}>
        <p>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
