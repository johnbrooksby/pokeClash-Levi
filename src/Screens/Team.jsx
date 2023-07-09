import React from 'react'
import { useState,useEffect,useContext } from 'react'
import GlobalContext from '../state/GlobalState';


const Team = () => {
  const {team} = useContext(GlobalContext)
  return (
    <div>
      {team.map((pokemon)=> {
        return <h1>{pokemon}</h1>
      })}
      
    </div>
  )
}

export default Team