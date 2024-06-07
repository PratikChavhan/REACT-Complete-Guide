import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import Item from "./Item";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  // console.log("check");
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  // console.log(todoItems);
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <Item
          key={`${item.name}${item.dueDate}`}
          todoDate={item.dueDate}
          todoName={item.name}
        ></Item>
      ))}
    </div>
  );
};

export default TodoItems;
