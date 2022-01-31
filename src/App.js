import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer'

function App() {

  const [beers, setBeers] = useState([]);
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => {
      setBeers(response.data);
    })
    .catch((e) => console.log(e));
  }, []);


  useEffect(() => {
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then((response) => {
      setRandomBeer(response.data);
    })
    .catch((e) => console.log(e));
  }, []);




  return (
    <div className="App">
    <Navbar />

    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/beers' element={<AllBeers beers={beers}/>} >
      <Route path=':id' element={<SingleBeer beers={beers}/>} />
    </Route>
    <Route path='/random-beer' element={<RandomBeer randomBeer={randomBeer}/>} />
    <Route path='/new-beer' element={<NewBeer />} />

    </Routes>

    </div>
  );
}

export default App;
