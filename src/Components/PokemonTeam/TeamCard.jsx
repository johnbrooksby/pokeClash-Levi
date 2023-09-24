import React from "react";
import {TiDeleteOutline} from 'react-icons/ti'
import { useContext } from "react";
import GlobalContext from "../../state/GlobalState";



const TeamCard = ({ pokemon, move }) => {

  const {removeFromTeam} = useContext(GlobalContext)


  if (!move || move.length === 0) {
    return <div>Loading...</div>;
  }

  const randomIndices = [];
  while (randomIndices.length < 1) {
    const randomIndex = Math.floor(Math.random() * move.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  const randomMoves = randomIndices.map((index) => move[index].name);

  return (
    <div className="poke-card">
      <img src={pokemon?.img} alt={pokemon?.name} />
      <h1>{pokemon?.name[0].toUpperCase() + pokemon?.name.slice(1)}</h1>
      <h2>HP: {pokemon?.stats[0]?.base_stat}</h2>
      <h2>Power: {Number(pokemon?.stats[1].base_stat) + Number(move[randomIndices[0]].power)  }</h2>

      <div>
        <h3>Special Move:</h3>
        {randomMoves.map((randomMove, index) => (
          <button key={index}>{randomMove}</button>
        
        ))}
        
      </div>
     <TiDeleteOutline size={30}  onClick={() => removeFromTeam(pokemon)}/>
    </div>
  );
};

export default TeamCard;
