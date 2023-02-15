import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";
import { useDispatch } from "react-redux";
import { searchTodo } from "../../reducers/todosReducer";
import { useState, useEffect } from "react";
import Input from "../../UI/Input/Input";
import { AiOutlineSearch } from "react-icons/ai";
const TodoList = ({ todoList, findedTodos }) => {
  const dispath = useDispatch();
  const [notFound, setNotFound] = useState(false);
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    if (!findedTodos.length && valueInput) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [valueInput]);

  const search = (e) => {
    setValueInput(e.target.value);
    dispath(searchTodo({ textTodo: e.target.value }));
  };

  const render = () => {
    if (notFound) return "Не найдено";
    if (findedTodos.length) {
      return findedTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />);
    } else {
      return todoList.map((todo) => <TodoItem todo={todo} key={todo.id} />);
    }
  };

  return (
    <ul className={styles.ul}>
      <div className={styles.search}>
        <Input style={{ maxWidth: "100%" }} onChange={search} value={valueInput} />
        <AiOutlineSearch className={styles.icon} />
      </div>
      {render()}
    </ul>
  );
};

export default TodoList;
