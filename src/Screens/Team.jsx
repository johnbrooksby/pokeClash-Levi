import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../state/GlobalState";
import axios from "axios";
import TeamBoard from "../Components/PokemonTeam/TeamBoard";

const Team = () => {
  const { team } = useContext(GlobalContext);
  const [pokemonData, setPokemonData] = useState([]);
  const [moves, setMoves] = useState([])
  const [moveData, setMoveData] = useState([])

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

  useEffect(() =>{
    axios.get("https://pokeapi.co/api/v2/move?limit=1000")
    .then((res) =>{
      
      setMoves(res.data.results)
    })

  },[])

  useEffect(() => {
    const fetchMoveData = async () => {
      try{
        const promises = moves.map((move) => {
          return axios.get(`https://pokeapi.co/api/v2/move/${move.name}`)
        })
        const responses = await Promise.all(promises)
        
        const pokemoveData = responses.map((res) => {
        const {name, accuracy, pp, power} = res.data
        return {name, accuracy, pp, power}
        })
        console.log(pokemoveData)
        setMoveData(pokemoveData)
      }
      catch(err){
        console.log(err)
      }
    }
fetchMoveData()
  },[moves])

  return (
    <div>
     <TeamBoard pokemonData={pokemonData} moveData={moveData}/>
    </div>
  );
};

export default Team;
