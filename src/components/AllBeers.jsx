import React from 'react';
import { Link, Outlet } from "react-router-dom";


const AllBeers = ({beers}) => {

    if(!beers) return <div>Loading</div>


return (
<>
<header> 
<Link to={'/'}><i className="fas fa-home"></i></Link>
</header>
<h1>All Beers</h1>


<div className='mainbeers'>

        <div class='allbeers'>
        {beers.map((beer) => {
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
