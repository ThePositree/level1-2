import TodoAdd from "../TodoAdd/TodoAdd";
import TodoList from "../TodoList/TodoList";
import styles from "./Todo.module.scss";
import { useSelector } from "react-redux";

const Todo = () => {
  const todoList = useSelector((state) => state.todos.todos);
  const findedTodos = useSelector((state) => state.todos.findedTodos);

  return (
    <div className={styles.container}>
      <TodoAdd />
      {todoList.length ? <TodoList todoList={todoList} findedTodos={findedTodos} /> : ""}
    </div>
  );
};

export default Todo;
