import React, { createContext, useState, useEffect, useReducer} from "react";

const initialState = {
  username: ''
}
const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [team, setTeam] = useState([]);


  const reducer = (state, action) => {
    switch(action.type){
      case "LOGIN" :
        let {username} = action.payload
        localStorage.setItem('username', username)
        return {...state, username:username}
    }
  }

  const [state, dispatch] = useReducer(reducer,initialState)

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
    state,
    dispatch,
    team,
    addToTeam,
  };

  return (
    <GlobalContext.Provider  value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider };
export default GlobalContext;
