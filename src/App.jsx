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

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Counter increment={increment} />
      <Statistics />
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
