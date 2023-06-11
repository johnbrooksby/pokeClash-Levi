import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header >
        <nav className="poke-header">
            <h1 className="header-title">PokeRumble</h1>
<Link to={'/home'}>
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


        </nav>
      </header>
    </div>
  );
};

export default Header;
