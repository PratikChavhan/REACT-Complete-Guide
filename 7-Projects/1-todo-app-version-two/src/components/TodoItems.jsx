import Item from "./Item";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  console.log("check");
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <Item
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></Item>
      ))}
    </div>
  );
};

export default TodoItems;
