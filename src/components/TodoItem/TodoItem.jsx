import styles from "./TodoItem.module.scss";
import Button from "../../UI/Button/Button";
import CheckBox from "../../UI/CheckBox/CheckBox";
import { AiFillDelete } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { MdEdit } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { useState, useRef } from "react";
import Input from "../../UI/Input/Input";
import TextArea from "../../UI/TextArea/TextArea";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { changeCompleteTodo, removeTodo, editTodo } from "../../reducers/todosReducer";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);

  const [isOpenDesc, setIsOpenDesc] = useState(false);

  const { text, isCompleted, id: idTodo, description } = todo;

  const editInput = useRef(null);
  const editTeaxArea = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const newText = editInput.current.value.trim();
    const newDesc = editTeaxArea.current.value.trim();
    if (newText) dispatch(editTodo({ idTodo, newText, newDesc }));
  };

  const changeChecked = () => {
    dispatch(changeCompleteTodo({ idTodo }));
  };

  const clickRemoveTodo = () => {
    dispatch(removeTodo({ idTodo }));
  };

  const toggleDesc = (e) => {
    setIsOpenDesc(!isOpenDesc);
  };

  const clickEdit = () => {
    setEdit(!edit);
    setIsOpenDesc(!edit);
  };

  return (
    <li className={cn({ [styles.openDesc]: isOpenDesc })} onClick={toggleDesc}>
      <div className={styles.wrapper}>
        <div className={cn(styles.inner, { [styles.editInner]: edit })} onClick={(e) => e.stopPropagation()}>
          <CheckBox checked={isCompleted} onChange={changeChecked} />
          {edit ? (
            <form onSubmit={handleSubmit} className={styles.form}>
              <Input ref={editInput} />
              <Button>
                <AiOutlineCheck />
              </Button>
            </form>
          ) : (
            <span className={styles.title}>{text}</span>
          )}
        </div>
        <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
          <Button onClick={clickEdit}>{edit ? <RxCross2 /> : <MdEdit />}</Button>
          <Button onClick={clickRemoveTodo}>
            <AiFillDelete />
          </Button>
        </div>
      </div>
      {isOpenDesc && (
        <div className={cn(styles.descriptionWrapper, { [styles.noPadding]: edit })} onClick={(e) => e.stopPropagation()}>
          {edit ? (
            <form onSubmit={handleSubmit} className={styles.form}>
              <TextArea ref={editTeaxArea} />
            </form>
          ) : (
            <p className={styles.desc}>{description}</p>
          )}
        </div>
      )}
    </li>
  );
};

export default TodoItem;
