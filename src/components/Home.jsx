import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
  return (
  <div className='homelinks'>
    <Link to={'/beers'}><h2>All Beers</h2></Link>
    <Link to={'/beers'}><img src='/assets/beers.png' alt='beers'></img></Link>

    <Link to={'/random-beer'}><h2>Random Beer</h2></Link>
    <Link to={'/random-beer'}><img src='/assets/random-beer.png' alt='random-beer'></img></Link>

    <Link to={'/new-beer'}><h2>Create a Beer</h2></Link>
    <Link to={'/new-beer'}><img src='/assets/new-beer.png' alt='new-beer'></img></Link>
    
  </div>
  );
};

export default Home;
