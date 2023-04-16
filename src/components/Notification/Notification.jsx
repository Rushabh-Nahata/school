import React from "react";
import "./notification.css";
import exam from "../../assets/images/exam.png";
import education from "../../assets/images/education.png";
import trophy from "../../assets/images/trophy.png";
import linkedin from "../../assets/images/linkedin.png";

const Notification = () => {
  return (
    <div>
      <section id="events">
        <h2>Notification</h2>
        <div className="education">
          <div className="box-events">
            <div className="image-holder-events">
              <img src={education} alt="education" className="school" />
            </div>
            <p>
              Board has decided to include the chapter of Shivaji maharaj in the
              history textbook
            </p>
            <button className="btn btn-primary">view more</button>
          </div>

          <div className="box-events">
            <div className="image-holder-events">
              <img src={exam} alt="exam" className="school" />
            </div>
            <p>The board exam would now covered all the syallbus</p>
            <button className="btn btn-primary">view more</button>
          </div>

          <div className="box-events">
            <div className="image-holder-events">
              <img src={trophy} alt="trophy" className="school" />
            </div>
            <p>
              Samata International School has won the best school in the State
              Award and our school ranked second in this event by education
              minister
            </p>
            <button className="btn btn-primary">view more</button>
          </div>

          <div className="box-events">
            <div className="image-holder-events">
              <img src={linkedin} alt="linkedin" className="school" />
            </div>
            <p>
             Students are requested to stop use of Social media and created an account on linkedin.
            </p>
            <button className="btn btn-primary">view more</button>
          </div>
        </div>
        <div className="more-events">
          <button className="btn btn-warning">More Events</button>
        </div>
      </section>
      {/* <button className="btn btn-warning">More </button> */}
    </div>
  );
};

export default Notification;
