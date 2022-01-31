import React from 'react';
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Search from './Search';


const AllBeers = ({beers}) => {

    const [searchedString, setSearchedString] = useState('');

    if(!beers) return <div>Loading</div>


    let searchedBeers = null;
  if (searchedString !== '') {
    searchedBeers = beers.filter((beer) => {
      return beer.name.toLowerCase().includes(searchedString.toLowerCase());
    });
  } else {
    searchedBeers = beers;
  }


return (
<>
<header> 
<Link to={'/'}><i className="fas fa-home"></i></Link>
</header>
<h1>All Beers</h1>

<Search 
      searchedString={searchedString}
      callbackSearch={setSearchedString}
    />


<div className='mainbeers'>

        <div class='allbeers'>
        {searchedBeers.map((beer) => {
            const id = String(beer._id);
            return (
            <div className='beer-list'>
            <p><Link to={id} className='allbeerslink'>{beer.name}</Link></p>
            <img src={beer.image_url} alt={beer.name}></img>
            <p key={beer.name}>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            </div>
            )
        })}
        </div>
        <Outlet />

</div>
  </>
  ) 
};

export default AllBeers;
