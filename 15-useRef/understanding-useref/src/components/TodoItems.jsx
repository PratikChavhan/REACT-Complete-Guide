import Item from "./Item";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  // console.log("check");
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <Item
          key={`${item.name}${item.dueDate}`}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></Item>
      ))}
    </div>
  );
};

export default TodoItems;
