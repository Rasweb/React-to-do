import { Items } from "../models/Items";

interface ITodoItems {
  todos: Items;
  handleDelete(id: number): void;
}

export const TodoItems = (props: ITodoItems) => {
  return (
    <li>
      <h3>{props.todos.title}</h3>
      <p>{props.todos.duration} min</p>

      <div>
        <label>
          Done
          <input
            type="checkbox"
            //   onClick={() => handleDone()}
            checked={props.todos.done}
            readOnly
          />
        </label>
        <button onClick={() => props.handleDelete(props.todos.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
