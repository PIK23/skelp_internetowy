import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../logo.png';

const Header = () => {
    const [phrase, setInputValue] = useState('');
    const handleSearch = (phrase) => {
        console.log(`Searched: ${phrase}`);
        };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        };
  return (
    <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="button-link" to="/">Home</Link>
        <input
            type="text"
            placeholder="Search"
            className="search-input"
            size="60"
            onChange={handleInputChange}
        />
        <button className="button-link" onClick={() => handleSearch(phrase)}>Submit</button>
    </div>
  );
};

export default Header;