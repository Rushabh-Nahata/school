import React from "react";
import school from "../../assets/images/pexels-pixabay-207692.jpg";
import "./home.css";
import phone from "../../assets/images/phone-call.png";
import email from "../../assets/images/gmail.png";
import letter from "../../assets/images/letter.png";
import book from "../../assets/images/book.png";
import location from "../../assets/images/placeholder.png";
const Home = () => {
  return (
    <div>
      <div id="home">
        <div className="image-container">
          <img src={school} alt="School" />
        </div>
        <div className="i-icons">
          <div className="contact-box">
            <div className="contact-school">
              <img src={phone} alt="phone" />
            </div>
            <p>Phone</p>
          </div>
          <div className="contact-box">
            <div className="contact-school">
              <img src={email} alt="Email" />
            </div>
            <p>Email</p>
          </div>
          <div className="contact-box">
            <div className="contact-school">
              <img src={location} alt="Location" />
            </div>
            <p>Location</p>
          </div>

          <div className="contact-box">
            <div className="contact-school">
              <img src={letter} alt="Location" />
            </div>
            <button
              style={{
                height: "40px",
                width: "150px",
                padding: "10px",
                margin: "10px",
                color: "blue",
                backgroundColor: "#69F78C",
              }}
            >
              Admission
            </button>
          </div>

          <div className="contact-box">
            <div className="contact-school">
              <img src={book} alt="Location" />
            </div>
            <button
              style={{
                height: "40px",
                width: "150px",
                padding: "10px",
                margin: "10px",
                color: "blue",
                backgroundColor: "#69F78C",
              }}
            >
              Prospectus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
