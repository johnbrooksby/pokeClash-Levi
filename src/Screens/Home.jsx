import React from "react";
import { useContext } from "react";
import GlobalContext from "../state/GlobalState";
import Groundon from '../images/Groudon.png'
import Kyogre from '../images/Kyogre.png'

const Home = () => {
  const { state } = useContext(GlobalContext);
  return (
    <div className="welcomeBoxBox">
      
      
        <div className="welcomeBox">
          <h1>Welcome to PokemonClash, {state.username}!</h1>
          <h2>A game of luck where power levels are randomized...</h2>
          <div className="pokemonImages">
            <img src={Kyogre} alt="" className="kyogre" />
          <div className="instructions">
            
            <div className="stepOne">
              <h3>1. Add Pokemon to your team</h3>
            </div>
            <div className="stepTwo">
              <h3>2. View your team in the team tab</h3>
            </div>
            <div className="stepThree">
              <h3>3. Battle to see what team will win!</h3>
            </div>
          </div>
          <img src={Groundon} alt="" className="groudon" />
          </div>
        </div>
     
    </div>
  );
};

export default Home;
