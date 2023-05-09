import { nanoid } from "nanoid";
import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todos/todosSlice";

export const TodoForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      addTodo({ id: nanoid(), text: form.elements[0].value, status: false })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="todo content" />
      <input type="submit" placeholder="add todo" />
    </form>
  );
};
