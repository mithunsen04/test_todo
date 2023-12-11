import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions/todoActions";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <table className="w-full">
    <thead>
      <tr>
        <th className="border p-2">Task</th>
        <th className="border p-2">Status</th>
        <th className="border p-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => (
        <tr key={todo.id} className="border">
          <td className={`p-2 ${todo.completed ? "line-through" : ""}`}>
            {todo.text}
          </td>
          <td className="p-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2"
            />
            {todo.completed ? "Done" : "Not Done"}
          </td>
          <td className="p-2">
            <button
              className="text-red-500"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoList);
