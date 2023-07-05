import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const About = () => {
  const [pokemon, setPokemon] = useState([]);
  const [shiny, setShiny] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      console.log(res.data);
      setPokemon(res.data);
    });
  }, []);
  return (
    <div className="about">
      <div className="about-img">
      <button onClick={() => setShiny(!shiny)}>Shiny version</button>
      {!shiny ? (
        <img
          src={pokemon.sprites?.other["official-artwork"].front_default}
          alt=""
        />
      ) : (
        <img
          src={pokemon.sprites?.other["official-artwork"].front_shiny}
          alt=""
        />
      )}
      </div>
      <div className="about-info-box">
        <div className="about-info">
          <h1>{pokemon.name}</h1>
      <h2>
        
        {pokemon.types &&
          pokemon.types.map((type) => {
            return <h3>{type.type.name}</h3>;
          })}
      </h2>
      <h2>Abilities:</h2>
      {pokemon.abilities &&
        pokemon.abilities.map((a) => {
          return <h3>{a.ability.name}</h3>;
        })}
        </div>
      </div>
      
    </div>
  );
};

export default About;
