import { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../assets/context/StoreContext";

interface Props {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const FoodItem = ({ _id, name, price, description, image }: Props) => {
  const store = useContext(StoreContext);
  if (!store) return null;

  const { cartItems, addItem, removeItem } = store;
  const item = cartItems.find((i) => i._id === _id);
  const itemCount = item?.quantity || 0;

  return (
    <>
      <div className="food-item">
        <div className="food-item-img-container">
          <img src={image} alt={name} className="food-item-image" />
          {!itemCount ? (
            <img
              className="add"
              src={assets.add_icon_white}
              alt="icon-white"
              onClick={() => addItem(_id)}
            />
          ) : (
            <div className="food-item-counter">
              <img
                src={assets.remove_icon_red}
                alt="remove"
                onClick={() => removeItem(_id)}
              />
              <p>{itemCount}</p>
              <img
                src={assets.add_icon_green}
                alt="add"
                onClick={() => addItem(_id)}
              />
            </div>
          )}
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-description">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
