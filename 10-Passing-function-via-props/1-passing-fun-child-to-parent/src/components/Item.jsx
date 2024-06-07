import styles from "./Item.module.css";

function Item({ food, handleBuyButton }) {
  return (
    <li className={`${styles["kg-item"]} list-group-item `}>
      <span className={styles["kg-span"]}>{food}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;

// to observe css module implementation inspect the component and observe the classNames
