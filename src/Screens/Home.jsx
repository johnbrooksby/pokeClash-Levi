import React from 'react'
import { useContext } from 'react'
import GlobalContext from '../state/GlobalState'


const Home = () => {
  const {state} = useContext(GlobalContext)
  return (
    <div>
      <h1>Welcome to PokeRumble, {state.username}!</h1>
    </div>
  )
}

export default Home