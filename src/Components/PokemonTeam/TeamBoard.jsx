import React from 'react'
import TeamCard from './TeamCard'

const TeamBoard = ({pokemonData, moveData}) => {

const teamDisplay = pokemonData.map((pokemon, index)=> {
    return <TeamCard key={index} pokemon={pokemon} move={moveData}/>
})


  return (
    <div> <div className="card-box">
    <div className="card-container">{teamDisplay}</div>
  </div></div>
  )
}

export default TeamBoard