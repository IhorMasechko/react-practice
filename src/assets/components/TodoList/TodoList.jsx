import React from "react";

export const TodoList = ({ changeTodo, todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>{todo.text}</p>
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => changeTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};
