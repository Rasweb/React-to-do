import { Items } from "../models/Items";

interface ITodoItems {
  todos: Items;
}

//handleDone

export const TodoItems = (props: ITodoItems, handleDelete: Function) => {
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
