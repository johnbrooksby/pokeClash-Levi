import './App.css';
import { Route,Routes } from 'react-router-dom';
import About from './Screens/About'
import Pokemon from './Screens/Pokemon'
import Team from './Screens/Team'
import Rumble from './Screens/Rumble'
import Home from './Screens/Home';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/pokemon' element={<Pokemon/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/rumble' element={<Rumble/>}/>
        <Route path='/about/:name' element={<About/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
