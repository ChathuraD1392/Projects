import { menu_list } from "../../assets/frontend_assets/assets";
import "./ExploreMenu.css";

const ExpolreMenu = () => {
  return (
    <>
      <div className="explore-menu" id="explore-menu">
        <h2>Explore our Menus</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea sunt
          nobis voluptatum, odit minus cumque doloremque cupiditate ad dolor?
          Optio minima pariatur quod error repudiandae ab cumque, placeat
          quisquam possimus?
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => (
            <div className="explore-menu-list-item" key={index}>
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
};

export default ExpolreMenu;
