import { createContext, useState, type ReactNode } from "react";
import { food_list } from "../frontend_assets/assets";

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
}

interface Props {
  children: ReactNode;
}

export const StoreContext = createContext<StoreContextType | null>(null);

const StoreContextProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (_id: string) => {
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
  };

  const removeItem = (_id: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item._id === _id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const contextValue: StoreContextType = {
    foodList: food_list,
    cartItems,
    addItem,
    removeItem,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
