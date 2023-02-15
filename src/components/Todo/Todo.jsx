import { useState } from "react";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoList from "../TodoList/TodoList";
import styles from "./Todo.module.scss";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (todo) => {
    const arr = [...todoList, todo];
    setTodoList(arr);
  };

  return (
    <div className={styles.container}>
      <TodoAdd callback={addTodo} />
      {todoList.length ? <TodoList todoList={todoList} setTodoList={setTodoList} /> : ""}
    </div>
  );
};

export default Todo;
