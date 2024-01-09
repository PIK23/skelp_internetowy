import React, { useState } from 'react';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = () => {
    login({ username, password });
    navigate('/');
    //dodac obsluge keycloak
  };

  return (
    <div class="login">
        <div class="input-container">
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
        </div>
      <div class="button-container">
        <button onClick={handleLogin}>Log in</button>
      </div>
    </div>
  );
};

export default Login;