import React from "react";
import "./navbar2.css";
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
                  Events
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  onMouseEnter={play}
                  onMouseLeave={stop}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  onMouseEnter={play}
                  onMouseLeave={stop}
                >
                  Contact uS
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  onMouseEnter={play}
                  onMouseLeave={stop}
                >
                  mandotary disclosure
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  onMouseEnter={play}
                  onMouseLeave={stop}
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  spy={true}
                  smooth={true}
                  onMouseEnter={play}
                  onMouseLeave={stop}
                >
                  Signup
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
