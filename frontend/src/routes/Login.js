import React, { useState } from 'react';
import { useUser } from './UserContext';

const Login = () => {
  const { login } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login({ username, password });
    //dodac obsluge keycloak
  };

  return (
    <div>
        <div>
        <label><b>Username</b></label>
        <input
          type="text"
          placeholder="Enter Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div>
        </div>
        <label><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default Login;

//poprawic wyglad