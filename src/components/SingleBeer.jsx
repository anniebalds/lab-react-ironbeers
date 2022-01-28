import React from 'react';
import { useParams } from "react-router-dom";


const SingleBeer = ({beers}) => {
    const params = useParams();

    const thisBeer = beers.find(
        (beer) => beer._id === params.id
    );

    console.log('here', thisBeer)


  return (
  <div className='thisbeer'>
    <h1 key={thisBeer.name}>{thisBeer.name}</h1>
    <img src={thisBeer.image_url} alt={thisBeer.name}></img>    
    <h2>{thisBeer.tagline}</h2>
    <h2>{thisBeer.first_brewed}</h2>
    <h2>{thisBeer.attenuation_level}</h2>
    <p>{thisBeer.description}</p>
    <p>{thisBeer.contributed_by}</p>
  </div>
  )
};

export default SingleBeer;
