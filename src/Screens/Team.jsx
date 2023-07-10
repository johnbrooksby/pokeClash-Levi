import React from "react";
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../state/GlobalState";
import axios from "axios";

const Team = () => {
  const { team } = useContext(GlobalContext);

  useEffect(() => {
    const newTeam = team.map((name) => {
      axios
        .get(` https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  return (
    <div>
      {team.map((pokemon) => {
        return <h1>{pokemon}</h1>;
      })}
    </div>
  );
};

export default Team;
