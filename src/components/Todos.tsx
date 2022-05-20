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

  // console.log(done);

  // const handleClick = (id: number) => {
  //   const notDoneItems = todos.filter((item) =>
  //     item.id === id ? { ...item, done: true } : item
  //   );
  //   setTodos(notDoneItems);
  // };

  const handleDelete = (id: number) => {
    // If id is not the pressed one add to new array.
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    console.log("Delete");
  };

  let todoHtml = todos.map((item) => {
    return (
      //  handleDelete={handleDelete}
      <TodoItems
        todos={item}
        key={item.id}
        handleDelete={handleDelete}
        handleClick={handleClick}
      />
    );
  });

  return (
    <>
      {todoHtml}
      {/* <input type="checkbox" checked={done} onChange={handleClick} /> */}
    </>
  );
};
