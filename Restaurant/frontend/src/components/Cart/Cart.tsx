import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../assets/context/StoreContext";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeItem, getTotalAmount, url } =
    useContext(StoreContext)!;
  const total = getTotalAmount();
  let deliveryCharge = 0;
  if (total > 0) {
    deliveryCharge = 10;
  }

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
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {cartItems.map((item, index) => (
            <div key={index}>
              <div className="cart-title cart-items-item">
                <img src={url + "/images/" + item.image} alt="image" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <p className="cross" onClick={() => removeItem(item._id)}>
                  <img
                    className="crossImg"
                    src={assets.remove_icon_red}
                    alt="cross"
                  />
                </p>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${deliveryCharge.toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>${(total + deliveryCharge).toFixed(2)}</p>
              </div>
              <hr />
              <button>
                <Link to="/order">Proceed to Checkout</Link>
              </button>
            </div>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promocode, Enter here</p>
              <div className="promocode-input">
                <input type="text" placeholder="Promocode" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
