// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

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
