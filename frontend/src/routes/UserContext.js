import React, { createContext, useContext, useState, useEffect } from 'react';
// import Keycloak from 'keycloak-js';
import UserService from '../UserService';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState(null);


  const login = async () => {
    try {
      // Wywołaj uwierzytelnianie
      const authenticated = await UserService.doLogin();

      if (authenticated) {
        // Jeśli uwierzytelnianie powiodło się, zaktualizuj stan użytkownika
        setUser(UserService.getTokenParsed());
      }
    } catch (error) {
      console.error('Error during Keycloak login: ', error);
    }
  };

  const register = (userData) => {
    setNewUser(userData);
  };

  const logout = () => {
    UserService.doLogout();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, newUser, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
