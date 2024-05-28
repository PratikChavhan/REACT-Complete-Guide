import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let foods = ["Sabzi", "Dal", "Green Veges", "Roti", "Salad", "Milk", "Ghee"];

  // let textToShow = useState("Entered Food Item");
  // let text = textToShow[0];
  // let setTextToShow = textToShow[1];
  // console.log(`Current value of setText: ${text}`);

  let [textToShow, setTextToShow] = useState("Entered Food Item");

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextToShow(event.target.value);
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <p>{textToShow}</p>
      <ErrorMessage foods={foods}></ErrorMessage>
      <FoodItems items={foods}></FoodItems>
    </Container>
  );
}

export default App;
