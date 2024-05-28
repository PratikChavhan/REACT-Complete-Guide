import FoodItem from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <FoodItem key={item} food={item}></FoodItem>
      ))}
    </ul>
  );
};

export default FoodItems;
