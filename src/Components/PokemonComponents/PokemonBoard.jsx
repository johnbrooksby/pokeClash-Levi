import React from "react";
import PokemonCard from "./PokemonCard";
import { useState } from "react";

const PokemonBoard = ({ pokemon}) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const pokeDisplay = pokemon

    .filter((p, i) => {
      return p.name.includes(search);
    })

    .map((p, i) => {
      return <PokemonCard key={i} pokemon={p}  />;
    });

  return (
    <div>
      <input type="text" placeholder="Search Pokemon" onChange={handleSearch} />
      <div className="card-box">
        <div className="card-container">{pokeDisplay}</div>
      </div>
    </div>
  );
};

export default PokemonBoard;
