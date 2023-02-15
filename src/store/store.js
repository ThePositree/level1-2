import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../reducers/todosReducer";

const authMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.startsWith("todos/")) {
    const todos = store.getState().todos.todos;
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  return result;
};

export const store = configureStore({
  reducer: { todos: todosReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
});
