// import React from "react";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";

// const App = () => (
//   <div className="max-w-md mx-auto mt-8">
//     <h1 className="text-3xl font-bold mb-4">TODO APP</h1>
//     <TodoForm />
//     <TodoList />
//   </div>
// );

// export default App;

import React from "react"; // Import React for functional components
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import routing components
import Hotels from "./Hotels.js"; // Assuming your Hotels component is in a file named Hotels.js
import HotelDetails from "./HotelDetails"; // Assuming your HotelDetails component is in a file named HotelDetails.js
import Admin from "./Admin"; // Assuming your Admin component is in a file named Admin.js

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
