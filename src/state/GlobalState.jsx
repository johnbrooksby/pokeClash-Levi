import React, { createContext, useState, useEffect, useReducer} from "react";

const initialState = {
  username: '',
  authorized: null
}
const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [team, setTeam] = useState([]);


  const reducer = (state, action) => {
    switch(action.type){
      case "LOGIN" :
        let {username} = action.payload
        localStorage.setItem('username', username)
        return {...state, username:username, authorized: true}

      case "LOGOUT" :
        localStorage.clear()
        return{...state, username:null, authorized: false}
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

  const removeFromTeam = (pokemon) => {
    console.log("Removing:", pokemon.name); // Debugging line
    setTeam((prevTeam) => {
      const newTeam = prevTeam.filter((name) => name !== pokemon.name);
      console.log(newTeam); // Debugging line
      return newTeam;
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
    removeFromTeam
  };

  return (
    <GlobalContext.Provider  value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider };
export default GlobalContext;
