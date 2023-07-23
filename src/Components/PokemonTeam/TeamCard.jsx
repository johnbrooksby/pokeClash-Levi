import React from 'react'

const TeamCard = ({pokemon}) => {
  return (
    <div className='poke-card'>
        <img src={pokemon.img} alt={pokemon.name} />
         <h1>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
         <h2>HP: {pokemon.stats[0].base_stat}</h2>
    </div>
  )
}

export default TeamCard