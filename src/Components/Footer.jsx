import React from "react";
import Swords from "../images/swords.svg";
import Home from "../images/home.svg";
import Team from "../images/team.svg";
import Pokeball from "../images/Pokeball.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="mobile-navbox">
        <div className="mobile-nav">
          <Link to={'/'}>
            <img src={Home} alt="" className="navIMG" />
          </Link>
          <Link to={'/pokemon'}>
            <img src={Pokeball} alt="" className="navIMG" />
          </Link>
          <Link to={'/team'}>
            <img src={Team} alt="" className="navIMG" />
          </Link>
          <Link to={'/rumble'}>
            <img src={Swords} alt="" className="navIMG" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
