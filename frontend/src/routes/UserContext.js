import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };
  
  const register = (userData) => {
    setNewUser(userData);
  }

  const logout = () => {
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
