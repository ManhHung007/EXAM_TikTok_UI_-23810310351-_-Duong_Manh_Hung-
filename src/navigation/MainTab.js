import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTopTab from './HomeTopTab'; 
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

const BottomTab = createBottomTabNavigator();

const PlusIcon = () => (
  <View style={styles.plusIconWrapper}>
    <AntDesign name="plus" size={20} color="#000" />
  </View>
);

export default function MainTab() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#000', borderTopWidth: 0, height: 60, paddingBottom: 5 },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888',
      }}
    >
      <BottomTab.Screen 
        name="HomeTab" 
        component={HomeTopTab} 
        options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => <SimpleLineIcons name="home" size={22} color={color} /> }}
      />
      {/* Các tab dưới đây trỏ về Home để không nhảy trang */}
      <BottomTab.Screen 
        name="Discover" 
        component={HomeTopTab} 
        options={{ tabBarLabel: 'Discover', tabBarIcon: ({ color }) => <SimpleLineIcons name="magnifier" size={22} color={color} /> }}
      />
      <BottomTab.Screen 
        name="Plus" 
        component={HomeTopTab} 
        options={{ tabBarLabel: () => null, tabBarIcon: () => <PlusIcon /> }}
      />
      <BottomTab.Screen 
        name="Inbox" 
        component={HomeTopTab} 
        options={{ tabBarLabel: 'Inbox', tabBarIcon: ({ color }) => <SimpleLineIcons name="bubble" size={22} color={color} /> }}
      />
      <BottomTab.Screen 
        name="Profile" 
        component={HomeTopTab} 
        options={{ tabBarLabel: 'Me', tabBarIcon: ({ color }) => <SimpleLineIcons name="user" size={22} color={color} /> }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  plusIconWrapper: {
    width: 45, height: 28, backgroundColor: '#fff', borderRadius: 8,
    justifyContent: 'center', alignItems: 'center',
    borderLeftWidth: 3, borderLeftColor: '#69C9D0', borderRightWidth: 3, borderRightColor: '#EE1D52',
  }
});