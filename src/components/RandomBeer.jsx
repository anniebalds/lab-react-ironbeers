import React from 'react';
import { Link } from "react-router-dom";


const RandomBeer = ({randomBeer}) => {
    return (
        <div>
        <header>
        <Link to={'/'}><i className="fas fa-home"></i></Link>
        </header>

        <h1>Random Beer</h1>

        <div className='randombeer'>
        <h1 key={randomBeer.name}>{randomBeer.name}</h1>
        <img src={randomBeer.image_url} alt={randomBeer.name}></img>    
        <h2>{randomBeer.tagline}</h2>
        <h2>{randomBeer.first_brewed}</h2>
        <h2>{randomBeer.attenuation_level}</h2>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
        </div>
        </div>
      ) 
    };

export default RandomBeer;
