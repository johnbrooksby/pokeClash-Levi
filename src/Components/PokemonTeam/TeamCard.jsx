import React from "react";

const TeamCard = ({ pokemon, move }) => {
  if (!move || move.length === 0) {
    return <div>Loading...</div>;
  }

  const randomIndices = [];
  while (randomIndices.length < 4) {
    const randomIndex = Math.floor(Math.random() * move.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  const randomMoves = randomIndices.map((index) => move[index].name);

  return (
    <div className="poke-card">
      <img src={pokemon.img} alt={pokemon.name} />
      <h1>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
      <h2>HP: {pokemon.stats[0].base_stat}</h2>

      <div>
        {randomMoves.map((randomMove, index) => (
          <button key={index}>{randomMove}</button>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
