import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";
import Container from "./components/Container";

function App() {
  let foods = ["Sabzi", "Dal", "Green Veges", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage foods={foods}></ErrorMessage>
        <FoodItems items={foods}></FoodItems>
      </Container>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          praesentium at corrupti veritatis impedit harum ipsa omnis nihil ipsum
          error quasi quaerat fugiat cumque ipsam expedita, minus voluptas
          eveniet! Architecto.
        </p>
      </Container>
    </>
  );
}

export default App;
