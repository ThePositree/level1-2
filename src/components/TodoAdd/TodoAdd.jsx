import styles from "./TodoAdd.module.scss";
import { GrAdd } from "react-icons/gr";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { useRef } from "react";
const TodoAdd = ({ callback = () => {} }) => {
  const input = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.current.value) return;
    const todo = {
      id: Date.now(),
      text: input.current.value.trim(),
      isCompleted: false,
    };
    callback(todo);
    input.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input ref={input} />
      <Button>
        <GrAdd />
      </Button>
    </form>
  );
};

export default TodoAdd;
