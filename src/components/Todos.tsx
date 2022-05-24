import { useState } from "react";
import { Items } from "./../models/Items";
import { CreateTodo } from "./CreateTodo";
import { TodoItems } from "./TodoItems";

export const Todos = () => {
  const [todos, setTodos] = useState<Items[]>([
    new Items("Feed cat", 5, false, 1),
    new Items("Exercise", 60, false, 2),
    new Items("Shower", 5, false, 3),
    new Items("Read book", 30, false, 4),
    new Items("Sleep", 420, false, 5),
  ]);

  const handleClick = (id: number) => {
    // 1. Create new list using map.
    // 2. Check if item meets condition.
    // 3. If condition is meet use all properties.
    // 4. Create new item with old properties and modify done.
    const res = todos.map((item) => {
      if (item.id === id) {
        const updatelist = {
          ...item,
          done: !item.done,
        };
        return updatelist;
      }
      return item;
    });
    setTodos(res);
  };

  const handleDelete = (id: number) => {
    // If id is not the pressed one add to new array.
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    console.log("Delete");
  };

  const handleAddTodo = (item: Items) => {
    setTodos([...todos, item]);
    // setTodos([...todos, oneTodo]);
  };

  let todoHtml = todos.map((item) => {
    return (
      <>
        <TodoItems
          todos={item}
          key={item.id}
          handleDelete={handleDelete}
          handleClick={handleClick}
        />
      </>
    );
  });

  return (
    <>
      {/* <CreateTodo todos={todos} /> */}
      <CreateTodo handleAddTodo={handleAddTodo} />
      {todoHtml}

      {/* <input type="checkbox" checked={done} onChange={handleClick} /> */}
    </>
  );
};
