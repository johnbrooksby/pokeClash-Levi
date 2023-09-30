import React from "react";
import { Link } from "react-router-dom";
import { useContext,useState } from "react";

import GlobalContext from "../state/GlobalState";
import Pokeball from '../images/Pokeball.png'

const Header = () => {
  const { state, dispatch } = useContext(GlobalContext);


  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      <header>
        <nav className="poke-header">
          <h1 className="header-title">PokemonClash</h1>
          <Link to={"/"}>
            <button>Home</button>
          </Link>
          <Link to={"/pokemon"}>
            <button>Pokemon</button>
          </Link>
          <Link to={"/team"}>
            <button>Team</button>
          </Link>
          <Link to={"/rumble"}>
            <button>Rumble</button>
          </Link>

          <button onClick={handleLogout} className="logout">Logout</button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
