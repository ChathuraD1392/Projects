import "./University.css";
import image1 from "../../assets/gallery-1.png";
import image2 from "../../assets/gallery-2.png";
import image3 from "../../assets/gallery-3.png";
import image4 from "../../assets/gallery-4.png";
import whiteArrow from "../../assets/white-arrow.png";

const University = () => {
  return (
    <>
      <div className="university">
        <div className="gallery">
          <img src={image1} alt="image1" />
          <img src={image2} alt="image2" />
          <img src={image3} alt="image3" />
          <img src={image4} alt="image4" />
        </div>
        <button className="btn dark">
          See More <img src={whiteArrow} alt="" />
        </button>
      </div>
    </>
  );
};

export default University;
