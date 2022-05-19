import { Items } from "../models/Items";

interface ITodoItems {
  todos: Items;
  handleDelete(id: number): void;
}

//handleDone

export const TodoItems = (props: ITodoItems, handleDelete: any) => {
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
        <button onClick={() => handleDelete(props.todos.id)}>Delete</button>
      </div>
    </li>
  );
};
