import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnKeyDown }) => {
  return (
    <input
      className={styles.foodInput}
      type="text"
      placeholder="Enter Food"
      onKeyDown={handleOnKeyDown}
    ></input>
  );
};

export default FoodInput;
