import { ChangeEvent, FormEvent, useState } from "react";
import { Items } from "../models/Items";

interface ICreateTodo {
  handleAddTodo(oneTodo: Items): void;
}

export const CreateTodo = (props: ICreateTodo) => {
  const [oneTodo, setOneTodo] = useState<Items>({
    title: "",
    duration: 0,
    done: false,
    id: 0,
  });

  const handleAdd = (e: ChangeEvent<HTMLInputElement>) => {
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
    props.handleAddTodo(oneTodo);
    //setTodos([...todos, oneTodo]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={oneTodo.title}
          onChange={handleAdd}
        />
        <br />
        <input
          type="number"
          placeholder="minutes"
          name="duration"
          value={oneTodo.duration}
          onChange={handleAdd}
        />{" "}
        <br />
        <input
          type="number"
          placeholder="id"
          name="id"
          value={oneTodo.id}
          onChange={handleAdd}
        />{" "}
        <br />
        <button type="submit">Add</button>
      </form>
      <div>Todo: {JSON.stringify(oneTodo)}</div>
    </>
  );
};
