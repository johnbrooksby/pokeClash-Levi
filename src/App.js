import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import GlobalContext from './state/GlobalState';
import About from './Screens/About'
import Pokemon from './Screens/Pokemon'
import Team from './Screens/Team'
import Rumble from './Screens/Rumble'
import Home from './Screens/Home';
import Header from './Components/Header';
import Auth from './Screens/Auth';
import Footer from './Components/Footer';

function App() {
  
  const {state: {authorized}} = useContext(GlobalContext)

  
  return (
    <div className="App">
      {authorized ? <Header /> : null}
      <Routes>
        <Route path='/auth' element={!authorized ? <Auth /> : <Navigate to={'/'}/>}/>
        <Route path='/' element={authorized ? <Home/> : <Navigate to={'/auth'}/>}/>
        <Route path='/pokemon' element={authorized ? <Pokemon/> : <Navigate to={'/auth'}/>}/>
        <Route path='/team' element={authorized ? <Team/> : <Navigate to={'/auth'}/>}/>
        <Route path='/rumble' element={authorized ? <Rumble/> : <Navigate to={'/auth'}/>}/>
        <Route path='/about/:name' element={<About/>}/>
      </Routes>
    <div className='spacer'></div>
      {authorized ? <Footer /> : null}
    
    </div>
  );
}

export default App;
