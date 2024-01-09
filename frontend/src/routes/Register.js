import React, { useState } from 'react';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  // Stan dla pól formularza
  const { register } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    register({ username, password, email});
    navigate('/');
    //dodac obsluge keycloak
  };

  return (
    <div class="register">
        <div class="input-container">
            <label> Email </label>
            <input
                type="text"
                placeholder="Enter Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>
        <div class="input-container">
            <label> Username </label>
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
            <label> Password </label>
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
            <button onClick={handleRegister}>Sign up</button>
        </div>
    </div>
  );
};

export default RegistrationForm;