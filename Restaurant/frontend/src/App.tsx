import { Route, Routes } from "react-router-dom";
import "./App.css";
import Order from "./components/Order/Order";
import AppDownload from "./components/AppDownload/AppDownload";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { useState } from "react";
import Login from "./components/LoginPopup/Login";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Verify from "./components/Verify/Verify";
import MyOrders from "./components/MyOrders/MyOrders";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
        <AppDownload />
        <Footer />
      </div>
    </>
  );
}

export default App;
