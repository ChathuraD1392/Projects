import { useContext } from "react";
import { StoreContext } from "../../assets/context/StoreContext";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }: { category: string }) => {
  const store = useContext(StoreContext);
  if (!store) return null;

  console.log(store.cartItems);

  const filtered =
    category === "all"
      ? store.foodList
      : store.foodList.filter((item) => item.category == category);
  return (
    <>
      <div className="food-display">
        <h2>Find your Favourites</h2>
        <div className="food-display-list">
          {filtered.map((item, index) => (
            <FoodItem
              key={index}
              _id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;
