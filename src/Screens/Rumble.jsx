import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../state/GlobalState";
import TeamBoard from "../Components/PokemonTeam/TeamBoard";

const Rumble = () => {
  const [computer, setComputer] = useState([]);
  const [computerData, setComputerData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [moves, setMoves] = useState([])
  const [moveData, setMoveData] = useState([])
  const { team } = useContext(GlobalContext);

  useEffect(() => {
    const morePokemonData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1010"
        );
        const pokeNames = response.data.results.map((pokemon) => pokemon.name);
        

        const computerTeam = [];
        while (computerTeam.length < 6) {
          const randomGenerate = Math.floor(Math.random() * pokeNames.length);

          const randomName = pokeNames[randomGenerate];
          computerTeam.push(randomName);
        }
        console.log(computerTeam);
        setComputer(computerTeam);
      } catch (error) {
        console.log(error);
      }
    };
    morePokemonData();
  }, []);

  useEffect(() => {
    const extraPokemonData = async () => {
      try {
        const allPromises = computer.map((name) =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        );
        const response = await Promise.all(allPromises);
        const pokemonData = response.map((res) => {
          const { id, name, sprites, stats } = res.data;
          const img = sprites.front_default;
          return { id, name, img, stats };
        });
        setComputerData(pokemonData);
      } catch (error) {
        console.log(error);
      }
    };
    extraPokemonData();
  }, [computer]);

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
       

        setTeamData(pokemonData);
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
      <h1>Computer Team</h1>
      <TeamBoard pokemonData={computerData} moveData={moveData}/>

      <div>
        <h1>Player Team</h1>
        <TeamBoard pokemonData={teamData} moveData={moveData}/>
      </div>
    </div>
  );
};

export default Rumble;
