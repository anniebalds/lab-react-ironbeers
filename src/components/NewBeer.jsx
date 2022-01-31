import axios from 'axios';
import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

const NewBeer = () => {

  const [name, setName] = useState(''); 
  const [tagline, setTagline] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [first_brewed, setFirstBrewed] = useState(''); 
  const [brewers_tips, setBrewersTips] = useState(''); 
  const [attenuation_level, setAttenuationLevel] = useState(''); 
  const [contributed_by, setContributedBy] = useState(''); 
  const [error, setError] = useState("");


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    axios
    .post('https://ih-beers-api2.herokuapp.com/beers/new', data)
    .then((response) => {
      console.log(response);
      navigate('/beers');
    })
    .catch((e) => {
      console.log(e);
      setError("There was an error, please try again");
    });
  };

    return (
        <div>
        <header>
        <Link to={'/'}><i className="fas fa-home"></i></Link>
        </header>

        <h1>Create a New Beer</h1>

        <form onSubmit={handleSubmit}>
          {error !== '' && <p>{error}</p>}
          <div class='form-div'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class='form-div'>
            <label htmlFor='tagline'>Tagline:</label>
            <input
              type='text'
              id='tagline'
              name='tagline'
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </div>
          <div class='form-div'>
          <label htmlFor='description'>Description:</label>
            <input
              type='text'
              id='description'
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div class='form-div'>
          <label htmlFor='first_brewed'>First brewed:</label>
            <input
              type='text'
              id='first_brewed'
              name='first_brewed'
              value={first_brewed}
              onChange={(e) => setFirstBrewed(e.target.value)}
            />
          </div>
          <div class='form-div'>
          <label htmlFor='brewers_tips'>Brewers' tips:</label>
            <input
              type='text'
              id='brewers_tips'
              name='brewers_tips'
              value={brewers_tips}
              onChange={(e) => setBrewersTips(e.target.value)}
            />
          </div>
          <div class='form-div'>
          <label htmlFor='attenuation_level'>Attenuation level:</label>
            <input
              type='number'
              id='attenuation_level'
              name='attenuation_level'
              value={attenuation_level}
              onChange={(e) => setAttenuationLevel(e.target.value)}
            />
          </div>
          <div class='form-div'>
          <label htmlFor='contributed_by'>Contributed by:</label>
            <input
              type='text'
              id='contributed_by'
              name='contributed_by'
              value={contributed_by}
              onChange={(e) => setContributedBy(e.target.value)}
            />
          </div>
          <button>Create new beer</button>
        </form>
        </div>
      ) 
    };

export default NewBeer;
