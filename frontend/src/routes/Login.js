import React, { useState } from 'react';
import { useUser, UserProvider } from './UserContext';
import { useNavigate } from 'react-router-dom';
import UserService from '../UserService';

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();


  const handleLogin = async () => {
    // navigate('/');
    //dodac obsluge keycloak
    try {
      await UserService.doLogin();
      const userInfo = await UserService.getToken();
      UserProvider.login(userInfo);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <div class="login">
        {/* <div class="input-container">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div class="input-container">
          <label>Password </label>
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div> */}
      {/* <div class="button-container"> */}
        {UserService.isLoggedIn() ? (
          <p>Jesteś zalogowany jako {UserService.getTokenParsed().preferred_username}</p>
        ) : (
          <button onClick={handleLogin}>Log in</button>
        )}
      {/* </div> */}
    </div>
  );
};

export default Login;