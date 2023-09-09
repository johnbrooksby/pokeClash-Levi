import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../state/GlobalState";

const Header = ({ register, setRegister }) => {
  const { state, dispatch } = useContext(GlobalContext);

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

          <button onClick={handleLogout}>Logout</button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
