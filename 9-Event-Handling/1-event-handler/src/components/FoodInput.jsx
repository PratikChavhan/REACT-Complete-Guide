import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      className={styles.foodInput}
      type="text"
      placeholder="Enter Food"
      onChange={handleOnChange}
    ></input>
  );
};

export default FoodInput;
