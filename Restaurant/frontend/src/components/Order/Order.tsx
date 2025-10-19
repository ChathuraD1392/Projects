import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../assets/context/StoreContext";
import "./Order.css";
import axios from "axios";

const Order = () => {
  const { getTotalAmount, cartItems, url, token } = useContext(StoreContext)!;
  const navigate = useNavigate();
  const total = getTotalAmount();
  let deliveryCharge = 0;
  if (total > 0) {
    deliveryCharge = 10;
  }

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    mobile: "",
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const placeOrder = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let orderData = {
      address: data,
      amount: getTotalAmount() + 10,
      items: cartItems,
      status: "",
    };

    console.log(orderData);
    let res = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });

    console.log(res.data);

    if (res.data.success) {
      const { session_url } = res.data;
      console.log(session_url);
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/cart");
    } else if (getTotalAmount() == 0) {
      navigate("/cart");
    }
  }, [token]);
  return (
    <>
      <button className="backToCheckout">
        <Link to="/cart">Back</Link>
      </button>
      <form onSubmit={placeOrder} className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input
              onChange={onChangeHandler}
              type="text"
              placeholder="Firstname"
              name="firstname"
              value={data.firstname}
            />
            <input
              onChange={onChangeHandler}
              type="text"
              placeholder="Lastname"
              name="lastname"
              value={data.lastname}
            />
          </div>
          <input
            onChange={onChangeHandler}
            type="text"
            placeholder="Email"
            name="email"
            value={data.email}
          />
          <input
            onChange={onChangeHandler}
            type="text"
            placeholder="Street"
            name="street"
            value={data.street}
          />
          <div className="multi-fields">
            <input
              onChange={onChangeHandler}
              type="text"
              placeholder="City"
              name="city"
              value={data.city}
            />
            <input
              onChange={onChangeHandler}
              type="text"
              placeholder="State"
              name="state"
              value={data.state}
            />
          </div>
          <div className="multi-fields">
            <input
              onChange={onChangeHandler}
              type="text"
              placeholder="Zip-Code"
              name="zipCode"
              value={data.zipCode}
            />
            <input
              onChange={onChangeHandler}
              type="text"
              placeholder="Country"
              name="country"
              value={data.country}
            />
          </div>
          <input
            onChange={onChangeHandler}
            type="text"
            placeholder="Mobile"
            name="mobile"
            value={data.mobile}
          />
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
            <button type="submit">Proceed to Payment</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Order;
