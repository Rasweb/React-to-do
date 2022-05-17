import { useState } from "react";
import { Items } from "./../models/Items";
import { TodoItems } from "./TodoItems";

export const Todos = () => {
  const [todos, setTodos] = useState<Items[]>([
    new Items("Feed cat", 5, false, 1),
    new Items("Exercise", 60, false, 2),
    new Items("Shower", 5, false, 3),
    new Items("Read book", 30, false, 4),
    new Items("Sleep", 420, false, 5),
  ]);

  return (
    <>
      {todos.map((item) => {
        return <TodoItems todos={item} key={item.id} />;
      })}
    </>
  );
};
