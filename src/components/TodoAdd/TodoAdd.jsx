import styles from "./TodoAdd.module.scss";
import { GrAdd } from "react-icons/gr";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../reducers/todosReducer";
import TextArea from "../../UI/TextArea/TextArea";
const TodoAdd = () => {
  const input = useRef(null);
  const textarea = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.current.value) return;
    const todo = {
      id: Date.now(),
      text: input.current.value.trim(),
      isCompleted: false,
      description: textarea.current.value.trim(),
    };
    dispatch(addTodo({ todo }));
    input.current.value = "";
    textarea.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input ref={input} placeholder='Заголовок' />
      <TextArea ref={textarea} placeholder='Описание' />
      <Button style={{ width: "100%" }}>
        <GrAdd />
      </Button>
    </form>
  );
};

export default TodoAdd;
