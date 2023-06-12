import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const About = () => {
  const [pokemon, setPokemon] = useState([])
  const {name} = useParams()

  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      console.log(res.data)
      setPokemon(res.data)
    })
  },[])
  return (
    <div>
      <img src={pokemon.sprites?.other['official-artwork'].front_default} alt="" />
      <img src={pokemon.sprites?.other['official-artwork'].front_shiny} alt="" />
      <h1>{pokemon.name}</h1>
      <h2>Type: {pokemon.types && pokemon.types.map((type)=> {
        return <h3>{type.type.name}</h3>
      })}</h2>
      <h2>Abilities:</h2>
      {pokemon.abilities && pokemon.abilities.map((a)=> {
        return <h3>{a.ability.name}</h3>
      })}
    </div>
  )
}

export default About