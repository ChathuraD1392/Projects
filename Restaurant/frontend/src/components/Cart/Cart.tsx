import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../assets/context/StoreContext";

const Cart = () => {
  const { foodList } = useContext(StoreContext)!;
  console.log(foodList);

  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-title">
            <p>Items</p>
            <p>Title</p>
            <p>Unit Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <br />
          <hr />
          {
            foodList.map((item,index) => )
          }
        </div>
      </div>
    </>
  );
};

export default Cart;
