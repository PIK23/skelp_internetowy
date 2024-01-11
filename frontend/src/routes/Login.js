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
      {UserService.isLoggedIn() ? (
        <p>Jesteś zalogowany jako {UserService.getTokenParsed().preferred_username}</p>
      ) : (
        <button onClick={handleLogin}>Log in</button>
      )}
    </div>
  );
};

export default Login;