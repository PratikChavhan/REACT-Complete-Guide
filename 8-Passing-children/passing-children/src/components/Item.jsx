import styles from "./Item.module.css";

function Items({ food }) {
  return (
    <li className={`${styles["kg-item"]} list-group-item `}>
      <span className={styles["kg-span"]}>{food}</span>
    </li>
  );
}

export default Items;

// to observe css module implementation inspect the component and observe the classNames
