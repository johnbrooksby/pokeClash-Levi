import React from 'react'
import Swords from '../images/swords.svg'
import Home from '../images/home.svg'
import Team from '../images/team.svg'
import Pokeball from '../images/Pokeball.png'

const Footer = () => {
  return (
    <footer >
        <div className='mobile-navbox'>
        <div className='mobile-nav'>
            <img src={Home} alt="" className='navIMG' />
            <img src={Pokeball} alt=""className='navIMG'/>
            <img src={Team} alt="" className='navIMG'/>
            <img src={Swords} alt="" className='navIMG'/>


        </div>
        </div>
    </footer>
  )
}

export default Footer