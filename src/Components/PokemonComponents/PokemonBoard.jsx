import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonBoard = ({pokemon}) => {

    const pokeDisplay = pokemon.map((p,i) =>{
        return <PokemonCard key={i} pokemon={p}/>
    })


  return (
    <div className='card-box'>
    <div className='card-container'>
        {pokeDisplay}
    </div>
    </div>
  )
}

export default PokemonBoard