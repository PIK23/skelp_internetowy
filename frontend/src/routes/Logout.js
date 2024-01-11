import React from 'react';
import UserService from '../UserService';

const Logout = () => {

  const handleRegister = async () => {
    try {
        await UserService.doLogout();
        // const userInfo = await UserService.getToken();
        // console.log(userInfo);
      } catch (error) {
        console.error('Error: ', error);
      }
  };

  return (
    <button className="button-link" onClick={handleRegister}>Log out</button>
  );
};

export default Logout;