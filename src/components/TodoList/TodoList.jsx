import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";

const TodoList = ({ todoList, setTodoList }) => {
  const changeChecked = (todo) => {
    const arr = todoList.map((item) => {
      if (item.id === todo.id) item.isCompleted = !item.isCompleted;
      return item;
    });
    setTodoList(arr);
  };

  const removeTodo = (todo) => {
    const arr = todoList.filter((item) => item.id !== todo.id);
    setTodoList(arr);
  };

  const editTodo = ({ todo, newText }) => {
    const arr = todoList.map((item) => {
      if (item.id === todo.id) item.text = newText;
      return item;
    });
    setTodoList(arr);
  };

  return (
    <ul className={styles.ul}>
      {todoList.map((todo) => (
        <TodoItem todo={todo} changeChecked={changeChecked} removeTodo={removeTodo} editTodo={editTodo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
