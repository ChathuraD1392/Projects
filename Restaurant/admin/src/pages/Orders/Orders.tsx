import { useEffect, useState } from "react";
import "./Orders.css";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

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
    country: string;
    zipCode: string;
    mobile: string;
  };
  items: OrderItem[];
  status: string;
}

const Orders = () => {
  const url = "http://localhost:4000";
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    const res = await axios.get(url + "/api/order/list");
    if (res.data.success) {
      setOrders(res.data.data);
      console.log(res.data.data);
    } else {
      toast.error("Order fetching Error");
    }
  };

  const statusHandler = async (
    event: React.ChangeEvent<HTMLSelectElement>,
    orderId: string
  ) => {
    const res = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });

    if (res.data.success) {
      fetchOrders();
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <div className="order add">
        <h3>Order Page</h3>
        <div className="order-list">
          {orders.map((order, index) => (
            <div key={index} className="order-item">
              <img src={assets.parcel_icon} alt="parcel_icon" />
              <div>
                <div>
                  {order.items.map((item) =>
                    order.items.length - 1 === index ? (
                      <p className="order-item-food" key={item._id}>
                        {item.name + "x" + item.quantity}
                      </p>
                    ) : (
                      <p className="order-item-food" key={item._id}>
                        {item.name + "x" + item.quantity + ","}
                      </p>
                    )
                  )}
                </div>
                <p className="order-item-name">
                  {order.address.firstname + " " + order.address.lastname}
                </p>
                <div className="order-item-address">
                  <p>{order.address.street}</p>
                  <p>
                    {order.address.city + " "} {order.address.state + " "}{" "}
                    {order.address.country + " "} {order.address.zipCode}
                  </p>
                </div>
                <p className="order-item-phone">{order.address.mobile}</p>
              </div>
              <p>Item Count: {order.items.length}</p>
              <p>Total Amount : ${order.amount}</p>
              <select
                onChange={(e) => statusHandler(e, order._id)}
                value={order.status}
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivary">Out for Delivary</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
