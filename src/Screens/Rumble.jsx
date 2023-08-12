import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../state/GlobalState";

const Rumble = () => {
  const [computer, setComputer] = useState([]);
  const {team} = useContext(GlobalContext)

  useEffect(() => {
    const morePokemonData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1010"
        );
        const pokeNames = response.data.results.map((pokemon) => pokemon.name);
        console.log(pokeNames)

        const computerTeam = [];
        while (computerTeam.length < 6) {
          const randomGenerate = Math.floor(Math.random() * pokeNames.length);

          const randomName = pokeNames[randomGenerate];
          computerTeam.push(randomName);

        }
        console.log(computerTeam)
        setComputer(computerTeam)
        
      } catch (error) {
        console.log(error);
      }
    };
    morePokemonData();
  }, []);
  return <div>
    <h1>Computer Team</h1>
    <h4>{computer.map((name) => {
    return <h2>{name}</h2>
    })}</h4>

    <div>

      <h1>Player Team</h1>
      
    </div>
  </div>;
};

export default Rumble;
