import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonBoard from '../Components/PokemonComponents/PokemonBoard'

const Pokemon = () => {

  const [pokemon, setPokemon] = useState([])

  useEffect(() =>{
    axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=1000')
    .then((res) => {
      let newState = res.data.results.map((item, index) => {
        item.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        return item
      })
      console.log(res.data.results)
      setPokemon(res.data.results)
    })


  }, [])




  return (
    <div>
      <PokemonBoard pokemon={pokemon}/>
      

    </div>
  )
}

export default Pokemon