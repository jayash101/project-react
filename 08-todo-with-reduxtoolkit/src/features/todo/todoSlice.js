import { createSlice, nanoid } from "@reduxjs/toolkit";

// used to display initial state of the store
const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        // nanoid: random id
        id: nanoid(),
        text: action.payload,
        completed: false,
      };

      // push new data to initial todos
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      // update individual task
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo,
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
