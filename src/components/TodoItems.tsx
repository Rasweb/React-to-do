import { Items } from "../models/Items";

interface ITodoItems {
  todos: Items;
}

export const TodoItems = (props: ITodoItems) => {
  return (
    <li>
      <h3>{props.todos.title}</h3>
      <p>{props.todos.duration} min</p>
      <input type="checkbox" checked={props.todos.done} readOnly />
    </li>
  );
};
