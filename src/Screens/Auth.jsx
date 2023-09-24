import React from "react";
import { useState, useEffect,useContext } from "react";
import GlobalContext from "../state/GlobalState";
import axios from "axios";
import Charizard from '../images/Charizard.png'
import Blastoise from '../images/Blastoise.png'

const Auth = () => {
  const [username, setUserName] = useState("");
  const [login, setLogin] = useState("");
  const {state, dispatch} = useContext(GlobalContext)

  const registerHandler = (e) => {
    e.preventDefault();

    const myUser = {
      username: username,
    };

    axios.post("http://localhost:5050/register", myUser).then((res) => {
      console.log(res.data);
     
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();

    const loginUser = {
        login: login
    }
    axios.post('http://localhost:5050/login', loginUser)
    .then((res)=> {
        console.log(res.data)
        dispatch({type:"LOGIN", payload: res.data})
        
    })
  };

  return (
    <div className="title">
      <h1>PokemonClash!</h1>
    <div className="authBox">
        <img src={Blastoise} alt="" className="blastoise" />
      <div className="authglass">
    <div className="auth">
      <div>
      <form className="registerForm" onSubmit={registerHandler}>
        <input
          type="text"
          placeholder="Create a username"
          className="usernameInput"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button>Register</button>
      </form>
      </div>
      <div>
      <form action="loginForm" onSubmit={loginHandler}>
        <input
          type="text"
          placeholder="Enter a username"
          className="loginInput"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <button>Let's Go!</button>
      </form>
      </div>
    </div>
    </div>
    <img src={Charizard} alt="" className="charizard"/>
    </div>
    </div>
  );
};

export default Auth;
