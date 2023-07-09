import React, { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [team, setTeam] = useState([]);

  const addToTeam = (pokemon) => {
    if (team.length >= 6) {
      alert("Your team is full!");
      return;
    }

    setTeam((prevTeam) => {
      if (prevTeam.length < 6) {
        return [...prevTeam, pokemon.name];
      } else {
        return prevTeam;
      }
    });
  };

  useEffect(() => {
    console.log(team);
  }, [team]);

  const contextValue = {
    team,
    addToTeam,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider };
export default GlobalContext;
