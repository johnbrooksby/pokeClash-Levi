import React from "react";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../state/GlobalState";

const PokemonCard = ({ pokemon }) => {

  const { addToTeam } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/about/${pokemon.name}`);
  };

  return (
    <div className="poke-card">
      <img src={pokemon.img} alt="" />
      <h2>{pokemon.name}</h2>
      <button onClick={handleClick}>About</button>
      <button onClick={() => addToTeam(pokemon)}>Add to Team</button>
    </div>
  );
};

export default PokemonCard;
