import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foods = ["Sabzi", "Dal", "Green Veges", "Roti", "Salad", "Milk", "Ghee"];

  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
 
  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <ErrorMessage foods={foods}></ErrorMessage>
      <FoodItems items={foods}></FoodItems>
    </Container>
  );
}

export default App;

// here we are passing one prop to the <FoodInput></FoodInput>
// that is about the behaviour of the textInput
// This is done because, we are making FoodInput.jsx independent from
// modification so that it can be implemented hastle free
// this is done because to club the modification under one file and not to
// scatter modification of component across multiple component.
// Thus, we learn the concept of passing function from child to parent via props.
