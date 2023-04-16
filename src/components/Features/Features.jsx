import React from "react";
import "./features.css";
import flask from "../../assets/images/flask.png";
import vehicles from "../../assets/images/vehicles.png";
import library from "../../assets/images/library.png";
import hostel from "../../assets/images/hostel.png";
const Features = () => {
  return (
    <div>
      <section id="events">
        <h2>Features</h2>
        <div className="education">
          <div className="box-events">
            <div className="image-holder-events">
              <img src={flask} alt="flask" className="school" />
            </div>
            <h3>Science-Lab</h3>
            <p>Rating By Student </p>3/5
            <p>Rating By Test </p>3/5
            <button className="btn btn-primary">view more</button>
          </div>

          <div className="box-events">
            <div className="image-holder-events">
              <img src={vehicles} alt="vehicles" className="school" />
            </div>
            <h3>Transportation</h3>
            <p>Rating By Student </p>3/5
            <p>Rating By Test </p>3/5
            <button className="btn btn-primary">view more</button>
          </div>

          <div className="box-events">
            <div className="image-holder-events">
              <img src={library} alt="library" className="school" />
            </div>
            <h3>Library</h3>
            <p>Rating By Student </p>3/5
            <p>Rating By Test </p>3/5
            <button className="btn btn-primary">view more</button>
          </div>

          <div className="box-events">
            <div className="image-holder-events">
              <img src={hostel} alt="hostel" className="school" />
            </div>
            <h3>Hostel Facilities</h3>
            <p>Rating By Student </p>3/5
            <p>Rating By Test </p>3/5
            <button className="btn btn-primary">view more</button>
          </div>
        </div>
        <div className="more-events">
          <button className="btn btn-warning">More Events</button>
        </div>
      </section>
    </div>
  );
};

export default Features;
