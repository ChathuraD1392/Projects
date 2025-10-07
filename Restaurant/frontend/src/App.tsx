import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./assets/Home/Home";
import Order from "./assets/Order/Order";
import AppDownload from "./components/AppDownload/AppDownload";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { useState } from "react";
import Login from "./components/LoginPopup/Login";
import Cart from "./components/Cart/Cart";

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
        </Routes>
        <AppDownload />
        <Footer />
      </div>
    </>
  );
}

export default App;
