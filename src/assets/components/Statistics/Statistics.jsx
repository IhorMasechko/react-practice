import React, { useMemo } from "react";
import { useSelector } from "react-redux";

export const Statistics = () => {
  const todos = useSelector((state) => state.todos);
  const total = todos.length;
  const isDoneTodos = useMemo(() => {
    console.log("recount");
    return todos.filter((todo) => todo.status).length;
  }, [todos]);
  return (
    <h1>
      Statistic: {isDoneTodos} / {total}
    </h1>
  );
};
