import React from 'react'
import TeamCard from './TeamCard'

const TeamBoard = ({pokemonData}) => {

const teamDisplay = pokemonData.map((pokemon)=> {
    return <TeamCard pokemon={pokemon}/>
})


  return (
    <div> <div className="card-box">
    <div className="card-container">{teamDisplay}</div>
  </div></div>
  )
}

export default TeamBoard