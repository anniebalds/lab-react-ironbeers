import React from 'react';
import { Link } from "react-router-dom";

const NewBeer = () => {
    return (
        <div>
        <header>
        <Link to={'/'}><i className="fas fa-home"></i></Link>
        </header>

        <h1>Create a New Beer</h1>
        </div>
      ) 
    };

export default NewBeer;
