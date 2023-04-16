import React from "react";
import "./navbar.css";
import useSound from "use-sound";
import { Link } from "react-scroll";
import sound from "../../assets/Mouse-Click-00-c-FesliyanStudios.com.mp3";

const Navbar = () => {
  const [play, { stop }] = useSound(sound);
  return (
    <div>
      <div className="n-wrapper" id="Navbar">
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  onMouseEnter={play}
                  onMouseLeave={stop}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  onMouseEnter={play}
                  onMouseLeave={stop}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  onMouseEnter={play}
                  onMouseLeave={stop}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  onMouseEnter={play}
                  onMouseLeave={stop}
                >
                  Basic Parameters
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  onMouseEnter={play}
                  onMouseLeave={stop}
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  spy={true}
                  smooth={true}
                  onMouseEnter={play}
                  onMouseLeave={stop}
                >
                  Notification
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
