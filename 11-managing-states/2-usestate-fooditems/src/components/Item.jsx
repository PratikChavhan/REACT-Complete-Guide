import styles from "./Item.module.css";

function Items({ food, handleBuyButton, bought }) {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
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

export default Items;

// to observe css module implementation inspect the component and observe the classNames
