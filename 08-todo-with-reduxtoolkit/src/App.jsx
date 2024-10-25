import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl text-purple-400">TODO LIST </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
