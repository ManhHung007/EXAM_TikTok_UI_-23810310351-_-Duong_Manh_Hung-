import React from 'react';
import HomeScreen from './HomeScreen';

const FollowingScreen = () => {
  return (
    <HomeScreen 
      backgroundImage={require('../img_assets/Background.png')} 
      avatarImage={require('../img_assets/user6.png')} 
    />
  );
};

export default FollowingScreen;