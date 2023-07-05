import React from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/about/${pokemon.name}`)
    }

  return (
    <div className="poke-card">
      <img src={pokemon.img} alt="" />
      <h2>{pokemon.name}</h2>
      <button onClick={handleClick}>About</button>
      <button>Add to Team</button>
    </div>
  );
};

export default PokemonCard;
