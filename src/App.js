import './App.css';
import {movies} from './Data'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ListMovie from './Components/ListMovie';
import CostumNavbar from './Components/CostumNavbar';
import AddFilm from './Components/AddFilm';

function App() {
  const [films, setFilms]= useState(movies)
  const [caracter, setCaracter]=useState('')
  const [rate, setRate]=useState(0)
  const addMovie=(movie)=>{
    setFilms([...films, movie])
  }

  return (
    <div className="App">
      <CostumNavbar setCaracter={setCaracter} setRate={setRate}/>
      <AddFilm addMovie={addMovie}/>
      <ListMovie films={films} caracter={caracter} rate={rate} />
    </div>
  );
}

export default App;
