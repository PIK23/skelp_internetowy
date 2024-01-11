import React from 'react';
import UserService from '../UserService';

const RegistrationForm = () => {

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
    <div class="register">
        <button className="button-link" onClick={handleRegister}>Log out</button>
    </div>
  );
};

export default RegistrationForm;