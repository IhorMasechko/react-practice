import { useCallback, useMemo } from "react";
import { useState } from "react";
import { Counter } from "./assets/components/Counter/Counter";
import { Statistics } from "./assets/components/Statistics/Statistics";
import { TodoForm } from "./assets/components/TodoForm/TodoForm";
import { TodoList } from "./assets/components/TodoList/TodoList";

// const todo = {
//   text: "",
//   status: false,
//   id: "",
// };

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const total = todos.length;
  const isDoneTodos = useMemo(() => {
    console.log("recount");
    return todos.filter((todo) => todo.status).length;
  }, [todos]);

  const addTodo = useCallback(
    (todo) => {
      console.log("add");
      setTodos([...todos, todo]);
    },
    [todos]
  );

  const changeTodo = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, status: !todo.status } : todo
        )
      );
    },
    [todos]
  );

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Counter increment={increment} />
      <Statistics total={total} isDoneTodos={isDoneTodos} />
      <TodoForm addTodo={addTodo} />
      <TodoList changeTodo={changeTodo} todos={todos} />
    </>
  );
}

export default App;
