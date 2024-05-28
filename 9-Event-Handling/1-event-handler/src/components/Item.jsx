import styles from "./Item.module.css";

function Items({ food }) {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${food} being bought!!!`);
    // alert(`${food} bought`);
  };

  return (
    <li className={`${styles["kg-item"]} list-group-item `}>
      <span className={styles["kg-span"]}>{food}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
}

export default Items;

// to observe css module implementation inspect the component and observe the classNames
