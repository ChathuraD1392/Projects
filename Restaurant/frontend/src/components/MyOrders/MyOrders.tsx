import { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../assets/context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/frontend_assets/assets";

interface OrderItem {
  _id: string;
  category: string;
  description: string;
  image: string;
  name: string;
  quantity: number;
  price?: number;
}

interface Order {
  _id: string;
  userId: string;
  amount: number;
  address: {
    firstname: string;
    lastname: string;
    email: string;
    street: string;
    city: string;
    state?: string;
  };
  items: OrderItem[];
  status: string;
}

const MyOrders = () => {
  const { url, token } = useContext(StoreContext)!;
  const [data, setData] = useState<Order[]>([]);

  const fetchOrders = async () => {
    const res = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
  return (
    <>
      <div className="my-orders">
        <h2>My Orders</h2>
        <div className="container">
          {data.map((order, index) => (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item) =>
                  order.items.length - 1 === index ? (
                    <p key={item._id}>{item.name + "x" + item.quantity}</p>
                  ) : (
                    <p key={item._id}>
                      {item.name + "x" + item.quantity + ","}
                    </p>
                  )
                )}
              </p>
              <p>Total Amount : ${order.amount.toFixed(2)}</p>
              <p>Items Count : {order.items.length}</p>
              <p>
                <span>&#x25cf;</span>
                <b> {order.status}</b>
              </p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
