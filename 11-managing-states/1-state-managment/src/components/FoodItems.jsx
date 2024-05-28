import FoodItem from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <FoodItem
          key={item}
          food={item}
          handleBuyButton={() => console.log(`${item} bought!!!`)}
        ></FoodItem>
      ))}
    </ul>
  );
};

export default FoodItems;
