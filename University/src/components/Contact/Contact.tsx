import "./Contact.css";
import msg from "../../assets/msg-icon.png";
import mail from "../../assets/mail-icon.png";
import phone from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
import whiteArrow from "../../assets/white-arrow.png";
import { useState, type FormEvent } from "react";

const Contact = () => {
  const key = import.meta.env.VITE_SECRET_KEY;
  console.log(key);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: key,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", mobile: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a Message. <img src={msg} alt="msg" />
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            expedita accusamus inventore minima, doloribus repellendus,
            architecto nulla doloremque sunt neque quas deserunt, assumenda
            fugiat in!
          </p>
          <ul>
            <li>
              <img src={mail} alt="" />
              contact@university.com
            </li>
            <li>
              <img src={phone} alt="" />
              +94 023 44884 333
            </li>
            <li>
              <img src={location} alt="" />
              No.15, Main Street, Texas <br /> United States of America
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              onChange={handleChange}
              value={formData.name}
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <label htmlFor="tel">Mobile</label>
            <input
              onChange={handleChange}
              value={formData.mobile}
              type="tel"
              name="mobile"
              placeholder="Mobile No"
              required
            />
            <label htmlFor="message">Your Message</label>
            <textarea
              onChange={handleChange}
              value={formData.message}
              name="message"
              id="message"
              rows={6}
              placeholder="Type your Message"
              required
            ></textarea>
            <button type="submit" className="btn dark" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Now"}{" "}
              <img src={whiteArrow} alt="arrow" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
