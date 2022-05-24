import { Todo } from "../models/Todo";

interface IPrintTodo {
  todos: Todo;
  handleDelete(id: number): void;
  handleDoneTodo(id: number): void;
}

export const PrintTodo = (props: IPrintTodo) => {
  return (
    // If props.todos.done is true use the class done.
    <li className="todoItemsCont">
      <div className={`${props.todos.done ? "done" : ""}`}>
        <h2>{props.todos.title}</h2>
        <p>{props.todos.duration} min</p>
      </div>
      <div>
        <label>
          {/* If props.todos.done is true show "✅" else show "❌" */}
          {props.todos.done ? "✅" : "❌"}
          <input
            type="checkbox"
            checked={props.todos.done}
            onChange={() => props.handleDoneTodo(props.todos.id)}
          />
        </label>
        <button onClick={() => props.handleDelete(props.todos.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
