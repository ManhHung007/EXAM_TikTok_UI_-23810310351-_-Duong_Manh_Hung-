// src/navigation/HomeTopTab.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FollowingScreen from '../screens/FollowingScreen';
import ForYouScreen from '../screens/ForYouScreen';

const Tab = createMaterialTopTabNavigator();

export default function HomeTopTab() {
  return (
    <Tab.Navigator
      initialRouteName="ForYou"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 17, fontWeight: 'bold', textTransform: 'none' },
        tabBarStyle: { 
          backgroundColor: 'transparent', 
          position: 'absolute', 
          top: 0, 
          paddingTop: 45, 
          left: 0, 
          right: 0, 
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888',
        tabBarIndicatorStyle: { height: 0 },
      }}
    >
      <Tab.Screen name="Following" component={FollowingScreen} />
      <Tab.Screen name="ForYou" component={ForYouScreen} />
    </Tab.Navigator>
  );
}