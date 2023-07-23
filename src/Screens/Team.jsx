import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../state/GlobalState";
import axios from "axios";
import TeamBoard from "../Components/PokemonTeam/TeamBoard";

const Team = () => {
  const { team } = useContext(GlobalContext);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const promises = team.map((name) =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        );
        const responses = await Promise.all(promises);

        const pokemonData = responses.map((res) => {
          const { id, name, sprites, stats } = res.data;
          const img = sprites.front_default;
          return { id, name, img, stats };
        });
        console.log(pokemonData)

        setPokemonData(pokemonData);
      } catch (error) {
        console.log("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemonData();
  }, [team]);

  return (
    <div>
     <TeamBoard pokemonData={pokemonData}/>
    </div>
  );
};

export default Team;
