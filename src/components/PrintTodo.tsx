import { Todo } from "../models/Todo";

interface IPrintTodo {
  todos: Todo;
  handleDelete(id: number): void;
  handleDoneTodo(id: number): void;
}

export const PrintTodo = (props: IPrintTodo) => {
  return (
    // If props.todos.done is true use the class done.
    <li className={`todoItemsCont + ${props.todos.done ? "done" : ""}`}>
      <h3>{props.todos.title}</h3>
      <p>{props.todos.duration} min</p>
      <div>
        <label>
          {/* If props.todos.done is true show "Undo" else show "Done" */}
          {props.todos.done ? "Undo" : "Done"}
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
