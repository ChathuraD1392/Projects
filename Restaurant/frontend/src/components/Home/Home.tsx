import { useState } from "react";
import ExpolreMenu from "../../components/ExporeMenu/ExpolreMenu";
import Header from "../../components/Header/Header";
import "./Home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <>
      <div className="home"></div>
      <Header />
      <ExpolreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </>
  );
};

export default Home;
