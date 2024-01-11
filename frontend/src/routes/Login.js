import React, { useState } from 'react';
import UserService from '../UserService';

const Login = () => {

  const handleLogin = async () => {
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