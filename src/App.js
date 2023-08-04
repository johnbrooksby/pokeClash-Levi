import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import About from './Screens/About'
import Pokemon from './Screens/Pokemon'
import Team from './Screens/Team'
import Rumble from './Screens/Rumble'
import Home from './Screens/Home';
import Header from './Components/Header';
import Auth from './Screens/Auth';

function App() {
  const [register, setRegister] = useState(true)

  
  return (
    <div className="App">
      {!register ? <Header register={register} setRegister={setRegister}/> : null}
      <Routes>
        <Route path='/auth' element={register ? <Auth register={register} setRegister={setRegister}/> : <Navigate to={'/'}/>}/>
        <Route path='/' element={!register ? <Home/> : <Navigate to={'/auth'}/>}/>
        <Route path='/pokemon' element={!register ? <Pokemon/> : <Navigate to={'/auth'}/>}/>
        <Route path='/team' element={!register ? <Team/> : <Navigate to={'/auth'}/>}/>
        <Route path='/rumble' element={!register ? <Rumble/> : <Navigate to={'/auth'}/>}/>
        <Route path='/about/:name' element={<About/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
