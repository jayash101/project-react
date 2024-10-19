import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Buy groceries",
            completed: false,
        }
    ],

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}

});

// custom hook
export const useTodo = () => {
  return useContext(TodoContext);
};

// context provider
export const TodoContextProvider = TodoContext.Provider;
