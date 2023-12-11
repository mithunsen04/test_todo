import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => (
  <div className="max-w-md mx-auto mt-8">
    <h1 className="text-3xl font-bold mb-4">TODO APP</h1>
    <TodoForm />
    <TodoList />
  </div>
);

export default App;
