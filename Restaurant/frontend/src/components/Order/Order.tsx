import { Link } from "react-router-dom";
import "./Order.css";
import { useContext } from "react";
import { StoreContext } from "../../assets/context/StoreContext";

const Order = () => {
  const { getTotalAmount } = useContext(StoreContext)!;
  const total = getTotalAmount();
  let deliveryCharge = 0;
  if (total > 0) {
    deliveryCharge = 10;
  }
  return (
    <>
      <button className="backToCheckout">
        <Link to="/cart">Back</Link>
      </button>
      <form action="" className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
          </div>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Street" />
          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder="Zip-Code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Mobile" />
        </div>
        <div className="place-order-right">
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
              <Link to="/order">Proceed to Payment</Link>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Order;
