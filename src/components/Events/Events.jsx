import React from "react";
import "./event.css";
import competition from "../../assets/images/competition.png";
import letter from "../../assets/images/letter.png";
import youtube from "../../assets/images/youtube.png"

const Events = () => {
  return (
    <div>
      <section id="events">
        <h2>Events in School</h2>
        <div className="education">
          <div className="box-events">
            <div className="image-holder-events">
              <img src={competition} alt="competition" className="school" />
            </div>
            <p>
              There will be drawing competition held in School on upcoming
              Saturday All student are requested to bring required material for
              competition
            </p>
            <button className="btn btn-primary">view more</button>
          </div>

          <div className="box-events">
            <div className="image-holder-events">
              <img src={letter} alt="letter" className="school" />
            </div>
            <p>
              There will be letter writing competition held in School on the
              occasion of Mahatma Gandhiji
            </p>
            <button className="btn btn-primary">view more</button>
          </div>

          <div className="box-events">
            <div className="image-holder-events">
              <img src={youtube} alt="youtube" className="school" />
            </div>
            <p>
              Student interested in dancing can record video and upload on youtube to win exicitng prizes
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

export default Events;
