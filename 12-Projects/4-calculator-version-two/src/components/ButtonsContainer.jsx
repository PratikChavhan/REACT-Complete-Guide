import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((btn) => (
        <button
          className={styles.buttons}
          onClick={() => onButtonClick(btn)}
          key={btn}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
