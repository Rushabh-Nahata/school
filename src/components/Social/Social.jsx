import React from 'react'
import "./social.css"
import instragram from "../../assets/images/instagram.png";
import Youtube from "../../assets/images/youtube.png";
import linkedin from "../../assets/images/linkedin.png";
import facebook from "../../assets/images/facebook.png";
import reddit from "../../assets/images/reddit.png";
import medium from "../../assets/images/medium.png";

const Social = () => {
  return (
    <div id="social">
      <div className="follow">
        <div className="img-holder">
          <img src={instragram} alt="instragram" />
        </div>
        <div className="img-holder">
          <img src={Youtube} alt="Youtube" />
        </div>
        <div className="img-holder">
          <img src={linkedin} alt="linkedin" />
        </div>
        <div className="img-holder">
          <img src={facebook} alt="facebook" />
        </div>
        <div className="img-holder">
          <img src={reddit} alt="reddit" />
        </div>
        <div className="img-holder">
          <img src={medium} alt="medium" />
        </div>
      </div>
      <div className="more-events">
        <button className="btn btn-warning">Share</button>
      </div>
    </div>
  );
}

export default Social