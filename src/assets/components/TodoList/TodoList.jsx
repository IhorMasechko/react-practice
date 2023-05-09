import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTodo } from "../../redux/todos/todosSlice";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const launchTodoChange = (id) => {
    dispatch(changeTodo(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>{todo.text}</p>
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => launchTodoChange(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};
