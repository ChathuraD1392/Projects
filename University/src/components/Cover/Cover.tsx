import "./Cover.css";
import arrow from "../../assets/dark-arrow.png";

const Cover = () => {
  return (
    <>
      <div className="cover container">
        <div className="cover-text">
          <h1>We ensure better education for a better world!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            delectus totam officia ipsam numquam debitis nobis cumque quidem
            ratione ut mollitia, culpa libero adipisci ea qui saepe illum harum?
            Iure.
          </p>
          <button className="btn">
            Explore More <img src={arrow} alt="arrow" />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Cover;
