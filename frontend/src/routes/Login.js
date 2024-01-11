import React, { useState } from 'react';
import { useUser, UserProvider } from './UserContext';
import { useNavigate } from 'react-router-dom';
import UserService from '../UserService';

const Login = () => {

  const handleLogin = async () => {
    // navigate('/');
    //dodac obsluge keycloak
    try {
      await UserService.doLogin();
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <div class="login">
        <button className="button-link" onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default Login;