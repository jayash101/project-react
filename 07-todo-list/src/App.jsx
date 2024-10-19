import React, { useEffect, useState } from "react";
import { TodoContextProvider } from "./context";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((todos) => [...todos, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    // If todos id matches to the current id, update the todo else remain same
    setTodos((todos) => todos.map((todo) => (todo.id === id ? todo : todo)));
  };

  const deleteTodo = (id) => {
    // If todos id matches to the current id, filter that id and other remains same
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // LocalStorage implementation
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos && storedTodos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="min-h-screen bg-[#172842] py-8">
        <div className="mx-auto w-full max-w-2xl rounded-lg px-4 py-3 text-white shadow-md">
          <h1 className="mb-8 mt-2 text-center text-2xl font-bold">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
