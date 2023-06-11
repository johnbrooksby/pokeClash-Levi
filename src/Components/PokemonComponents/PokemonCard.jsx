import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="poke-card">
      <img src={pokemon.img} alt="" />
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;
