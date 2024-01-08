import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { useUser } from './UserContext';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

const Header = () => {
  const { user, logout } = useUser();
  const [phrase, setInputValue] = useState('');

  const handleSearch = (phrase) => {
    console.log(`Searched: ${phrase}`);
    // dodac obsluge elastic search
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [value, setValue] = useState([0, 10000]);
  const minDistance = 1;

  const handleChange = (event, newValue) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      const clamped = newValue[0] + minDistance > 10000 ? 10000 - minDistance : newValue[0];
      setValue([clamped, clamped + minDistance]);
    } else {
      setValue(newValue);
    }
  };

  return (
    <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <Link className="button-link" to="/">
        Home
      </Link>
      <div class="container" style={{ marginTop: 35 }}>
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          size="60"
          onChange={handleInputChange}
        />
        <Tooltip title="Product price">
         <Box sx={{ width: 540 }}>
          <Slider
            value={value}
            onChange={handleChange}
            disableSwap
            valueLabelDisplay="auto"
            min={0}
            max={10000}
          />
        </Box>
        </Tooltip>
      </div>
      <div style={{ marginLeft: 10 }}>
      <button className="button-link" onClick={() => handleSearch(phrase)}>
          Submit
        </button>
        </div>
      <div className="right-buttons"></div>
      <Link className='button-link' to="/cart">Cart</Link>
      {user ? (
        <>
          <Link className='button-link' to="/account">Account</Link>
          <button className='button-link' onClick={logout}>Logout</button>
          <span>Witaj, {user.username}!</span>
        </>
      ) : (
        <>
          <Link className='button-link' to="/login">Login</Link>
          <Link className='button-link' to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Header;