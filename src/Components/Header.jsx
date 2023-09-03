import React from "react";
import { Link } from "react-router-dom";

const Header = ({register, setRegister}) => {
  return (
    <div>
      <header >
        <nav className="poke-header">
            <h1 className="header-title">PokemonClash</h1>
<Link to={'/'}>
            <button>Home</button>
</Link>
<Link to={'/pokemon'}>
            <button>Pokemon</button>
</Link>
<Link to={'/team'}>
            <button>Team</button>
</Link>
<Link to={'/rumble'}>
            <button>Rumble</button>
    </Link>        

<button>Logout</button>

        </nav>
      </header>
    </div>
  );
};

export default Header;
