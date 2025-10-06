import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./assets/Home/Home";
import Cart from "./assets/Cart/Cart";
import Order from "./assets/Order/Order";

function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
