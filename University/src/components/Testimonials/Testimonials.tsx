import "./Testimonails.css";
import next from "../../assets/next-icon.png";
import back from "../../assets/back-icon.png";
import { students } from "../../data/Students";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef<HTMLUListElement | null>(null);
  let tx = 0;

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    if (slider.current) slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideNext = () => {
    if (tx > -50) {
      tx -= 25;
    }
    if (slider.current) slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <>
      <div className="testimonials">
        <img onClick={slideBackward} src={back} alt="back" className="back" />
        <img onClick={slideNext} src={next} alt="next" className="next" />
        <div className="slider">
          <ul ref={slider}>
            {students.map((student) => (
              <li key={student.id}>
                <div className="slide">
                  <div className="user-info">
                    <img src={student.image} alt="" />
                    <div>
                      <h3>{student.name}</h3>
                      <span>{student.state}</span>
                    </div>
                  </div>
                  <p>{student.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
