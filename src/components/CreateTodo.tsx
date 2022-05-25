import { ChangeEvent, FormEvent, useState } from "react";
import { Todo } from "../models/Todo";

interface ICreateTodo {
  handleAddTodo(oneTodo: Todo): void;
}

export const CreateTodo = (props: ICreateTodo) => {
  // Creates a new state for the new Todo
  const [oneTodo, setOneTodo] = useState<Todo>({
    title: "",
    duration: 0,
    done: false,
    id: Todo.length + 1,
  });

  const handleAdd = (e: ChangeEvent<HTMLInputElement>) => {
    // Checks if input is number or not and adds to OneTodo.
    console.log(e.target.name);
    if (e.target.type !== "number") {
      setOneTodo({ ...oneTodo, [e.target.name]: e.target.value });
    } else {
      setOneTodo({ ...oneTodo, [e.target.name]: +e.target.value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(oneTodo);
    // uses OneTodo as a parameter for the add props.
    props.handleAddTodo(oneTodo);
    // Clears input after handleSubmit is called
    setOneTodo({ title: "", duration: 0, done: false, id: 0 });
  };

  return (
    <>
      {/* handleSubmit is the submit button function. */}
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit} className="createTodo">
        {/* handleAdd function listens to the input value. */}
        <label>Title</label>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={oneTodo.title}
          onChange={handleAdd}
          required
        />
        <label>Duration (min)</label>
        <input
          type="number"
          placeholder="minutes"
          name="duration"
          value={oneTodo.duration}
          onChange={handleAdd}
          required
        />{" "}
        <button type="submit">Add</button>
      </form>
    </>
  );
};
