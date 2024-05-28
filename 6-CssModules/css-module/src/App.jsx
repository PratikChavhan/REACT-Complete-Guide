import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";

function App() {
  let foods = ["Sabzi", "Dal", "Green Veges", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage foods={foods}></ErrorMessage>
      <FoodItems items={foods}></FoodItems>
    </>
  );
}

export default App;
