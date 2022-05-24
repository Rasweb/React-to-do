import { useState } from "react";
import { Todo } from "../models/Todo";
import { CreateTodo } from "./CreateTodo";
import { PrintTodo } from "./PrintTodo";

export const Todos = () => {
  // Creating the todo list using the Todo class.
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Feed cat", 5, false, 1),
    new Todo("Exercise", 60, false, 2),
    new Todo("Shower", 5, false, 3),
    new Todo("Read book", 30, false, 4),
    new Todo("Sleep", 420, false, 5),
  ]);

  const handleDoneTodo = (id: number) => {
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
    // Adds every item to a new array except the pressed id item.
    const newTodos = todos.filter((item) => item.id !== id);
    // The new array replaces the old.
    setTodos(newTodos);
    console.log("Delete");
  };

  const handleAddTodo = (item: Todo) => {
    //Adds Item (a new Todo) to the old Array.
    setTodos([...todos, item]);
  };

  let todoHtml = todos.map((item) => {
    // loops through every item using map.
    return (
      <>
        <PrintTodo
          todos={item}
          key={item.id}
          handleDelete={handleDelete}
          handleDoneTodo={handleDoneTodo}
        />
      </>
    );
  });

  return (
    <>
      <CreateTodo handleAddTodo={handleAddTodo} />
      {todoHtml}
    </>
  );
};
