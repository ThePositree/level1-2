import styles from "./TodoItem.module.scss";
import Button from "../../UI/Button/Button";
import CheckBox from "../../UI/CheckBox/CheckBox";
import { IoMdRemove } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { MdEdit } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { useState, useRef } from "react";
import Input from "../../UI/Input/Input";
import cn from "classnames";
const TodoItem = ({ todo, changeChecked, removeTodo, editTodo }) => {
  const [edit, setEdit] = useState(false);
  const { text, isCompleted } = todo;
  const editInput = useRef(null);
  const newText = "";
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const newText = editInput.current.value.trim();
    if (newText) editTodo({ todo, newText });
  };
  return (
    <li className={styles.li}>
      <div className={cn(styles.inner, { [styles.editInner]: edit })}>
        <CheckBox checked={isCompleted} onChange={() => changeChecked(todo)} />
        {edit ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input ref={editInput} />
            <Button>
              <AiOutlineCheck />
            </Button>
          </form>
        ) : (
          <span>{text}</span>
        )}
      </div>
      <div className={styles.inner}>
        <Button onClick={() => setEdit(!edit)}>{edit ? <RxCross2 /> : <MdEdit />}</Button>
        <Button onClick={() => removeTodo(todo)}>
          <IoMdRemove />
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
