import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonBoard from "../Components/PokemonComponents/PokemonBoard";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1010").then((res) => {
      let newState = res.data.results.map((item, index) => {
        item.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`;
        return item;
      });
      console.log(res.data.results);
      setPokemon(res.data.results);
    });
  }, []);

  // const addToTeam = (pokemon) => {
  //   if (team.length >= 6) {
  //     alert("You're team is full!");
  //   }
   
  //   setTeam((prevTeam) => {
  //     if (prevTeam.length < 6) {
  //       return [...prevTeam, pokemon.name];
  //     } else {
  //       return prevTeam;
  //     }
  //   });
  // };
  // useEffect(() => {
  //   console.log(team);
  // }, [team]);

  return (
    <div>
      <PokemonBoard pokemon={pokemon} />
    </div>
  );
};

export default Pokemon;
