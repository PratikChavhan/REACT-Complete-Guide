import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // When using any hook try to implement the hook onto the innermost
  // component because hooks rerenders the ui component after updating
  // the value. By innermost component mean,
  //  1. Directly inside the component [if there is only one component
  //     accessing the hook]
  //  2. Just above the accessing component i.e Parent Component. [if
  //     there are more than one components accessing the hook.]
  // Therefore for avoiding unnecessary rerendering create/use
  // hooks where the values are changing.

  // ["Sabzi", "Dal", "Green Veges", "Roti", "Salad", "Milk", "Ghee"];
  let [foods, setFoods] = useState([]);

  // Here because foods is used by two components, thus we have declared
  // the hook in the outermost component

  const onKeyDown = (event) => {
    if (event.code === "Enter" && event.key === "Enter") {
      let newFoodItem = event.target.value;
      // ideally the initial value of state must remain unchanged.
      // so, we are creating a new array.
      let newFoods = [...foods, newFoodItem];
      setFoods(newFoods);

      // clearing the text box
      event.target.value = "";
      console.log("Food value entered is", newFoodItem);
    }
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
      <ErrorMessage foods={foods}></ErrorMessage>
      <FoodItems items={foods}></FoodItems>
    </Container>
  );
}

export default App;
