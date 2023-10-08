import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GlobalContext from "../state/GlobalState";
import TeamBoard from "../Components/PokemonTeam/TeamBoard";

const Rumble = () => {
  const [computer, setComputer] = useState([]);
  const [computerData, setComputerData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [moves, setMoves] = useState([]);
  const [moveData, setMoveData] = useState([]);
  const [totalPower, setTotalPower] = useState(0);
  const { team } = useContext(GlobalContext);

  useEffect(() => {
    // Fetch computer team data
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
        setComputer(computerTeam);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch move data
    const fetchMoveData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/move?limit=1000"
        );
        setMoves(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    morePokemonData();
    fetchMoveData();
  }, []);

  useEffect(() => {
    // Fetch additional Pokemon data for computer team
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
    // Fetch move data for each move
    const fetchMoveData = async () => {
      try {
        const promises = moves.map((move) => {
          return axios.get(`https://pokeapi.co/api/v2/move/${move.name}`);
        });
        const responses = await Promise.all(promises);

        const pokemoveData = responses.map((res) => {
          const { name, power } = res.data;
          return { name, power };
        });

        setMoveData(pokemoveData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMoveData();
  }, [moves]);

  useEffect(() => {
    // Fetch Pokemon data for the player's team
    const fetchPokemonData = async () => {
      try {
        const promises = team.map((name) =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        );
        const responses = await Promise.all(promises);

        const pokemonData = responses.map((res) => {
          const { id, name, sprites, stats } = res.data;
          const img = sprites.front_default;
          const moves = res.data.moves.map((move) => move.move.name);
          return { id, name, img, stats, moves };
        });

        setTeamData(pokemonData);
      } catch (error) {
        console.log("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemonData();
  }, [team]);

  const handleFight = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if(randomNumber % 2 === 0) {
      alert('You Win')
      console.log("YOU WIN")
    }else{
      alert('You Lost')
      console.log("LOSER")
    }
  
  }

  return (
    <div>
      <h1>Opponent Team</h1>
      <TeamBoard pokemonData={computerData} moveData={moveData} />

      <div>
        <h1>Player Team</h1>
        <TeamBoard pokemonData={teamData} moveData={moveData} />
      </div>

      <div className="fightbtn-con">
        
        <button className="fightbtn" onClick={handleFight}>Fight!</button>
      </div>
    </div>
  );
};

export default Rumble;
