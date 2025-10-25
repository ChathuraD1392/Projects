import "./About.css";
import about from "../../assets/about.png";
import play from "../../assets/play-icon.png";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={about} alt="about-img" className="about-img" />
          <img src={play} alt="play-img" className="play-img" />
        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tommorow's Leaders Today</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            culpa? Cum error omnis hic et sint est quod maxime, ad at non
            veritatis quo repudiandae exercitationem, excepturi perspiciatis
            dolores delectus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dicta tenetur sapiente, exercitationem esse excepturi quam nemo
            ipsum. Consequatur facilis tenetur, eius qui saepe praesentium
            ducimus vel earum molestiae fuga, facere, corporis ea sint deleniti
            eveniet. Delectus eveniet neque laborum.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
