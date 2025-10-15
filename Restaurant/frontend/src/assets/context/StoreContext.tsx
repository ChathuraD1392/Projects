import { createContext, useEffect, useState, type ReactNode } from "react";
import axios from "axios";

interface FoodItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

interface CartItem extends FoodItem {
  quantity: number;
}

interface StoreContextType {
  foodList: FoodItem[];
  cartItems: CartItem[];
  addItem: (_id: string) => void;
  removeItem: (_id: string) => void;
  getTotalAmount: () => number;
  url: string;
  token: string;
  setToken: (t: string) => void;
}

interface Props {
  children: ReactNode;
}

export const StoreContext = createContext<StoreContextType | null>(null);

const StoreContextProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState<FoodItem[]>([]);

  const fetchFoodsList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  const loadCart = async (token: string) => {
    const res = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(res.data.cartData);
    console.log(res.data.cartData);
  };

  useEffect(() => {
    async function loadFoods() {
      await fetchFoodsList();
      const currentToken = localStorage.getItem("token");
      if (currentToken) {
        setToken(currentToken);
        await loadCart(currentToken);
      }
    }
    loadFoods();
  }, []);

  const addItem = async (_id: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item._id === _id);
      if (existing) {
        return prev.map((item) =>
          item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const food = food_list.find((item) => item._id === _id);
      if (food) return [...prev, { ...food, quantity: 1 }];
      return prev;
    });

    await axios.post(
      url + "/api/cart/add",
      { itemId: _id },
      {
        headers: { token },
      }
    );
  };

  const removeItem = async (_id: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item._id === _id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
    await axios.post(
      url + "/api/cart/remove",
      { itemId: _id },
      {
        headers: { token },
      }
    );
  };

  const getTotalAmount = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const contextValue: StoreContextType = {
    foodList: food_list,
    cartItems,
    addItem,
    removeItem,
    getTotalAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
