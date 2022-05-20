import { Items } from "../models/Items";

interface ITodoItems {
  todos: Items;
  handleDelete(id: number): void;

  handleClick(id: number): void;
}

export const TodoItems = (props: ITodoItems) => {
  return (
    <li className={`todoItemsCont + ${props.todos.done ? "red" : ""}`}>
      <h3>{props.todos.title}</h3>
      <p>{props.todos.duration} min</p>
      <div>
        <label>
          {props.todos.done ? "Undo" : "Done"}
          <input
            type="checkbox"
            checked={props.todos.done}
            onChange={() => props.handleClick(props.todos.id)}
          />
        </label>
        <button onClick={() => props.handleDelete(props.todos.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
