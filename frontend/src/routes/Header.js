import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { useUser } from './UserContext';

const Header = () => {
    const { user, logout } = useUser();
    const [phrase, setInputValue] = useState('');
    const handleSearch = (phrase) => {
        console.log(`Searched: ${phrase}`);
        //dodac obsluge elastic search
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
        <Link className='button-link' to="/cart">Cart</Link>
        <div className="right-buttons"></div>
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

//na pewno poprawić wyrownanie do prawej bo teraz jest hardkodowane liczba pixeli