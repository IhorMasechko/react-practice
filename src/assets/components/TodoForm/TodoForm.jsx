import { nanoid } from "nanoid";
import React from "react";

export const TodoForm = ({ addTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    addTodo({ id: nanoid(), text: form.elements[0].value, status: false });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="todo content" />
      <input type="submit" placeholder="add todo" />
    </form>
  );
};
