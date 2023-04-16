import React from "react";
import "./Footer.css";
import wave from "../../assets/images/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Email from "@iconscout/react-unicons/icons/uil-voicemail";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";
import Linked from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Rushabh International Schools</span>
        <span>+91 7620707855</span>
        <div className="f-icons">
          <a>
            {" "}
            <Insta color="white" size={"3rem"} />
          </a>
          <a>
            <Facebook color="white" size={"3rem"} />
          </a>
          <a>
            {" "}
            <Gitub color="white" size={"3rem"} />
          </a>
          <a>
            {" "}
            <Twitter color="white" size={"3rem"} />
          </a>
          <a>
            {" "}
            <Linked color="white" size={"3rem"} />
          </a>
          <a>
            {" "}
            <Youtube color="white" size={"3rem"} />
          </a>
          <a>
            {" "}
            <Email color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
