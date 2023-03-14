import React, { useState } from "react";
import Home from './components/Home';
import Gameboard from "./components/Gameboard";
import Scoreboard from "./components/Scoreboard";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Footer from "./components/Footer";
import Header from "./components/Header";
import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
return (
  <>
    <Header/>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarStyle: {display:"none"},
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home-account" 
              size={30}/> ),
            tabBarActiveTintColor: '#b66088',
            tabBarInactiveTintColor: 'gray'        
          }} 
        />
        <Tab.Screen 
          name="Gameboard" 
          component={Gameboard} 
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="dice-multiple" 
              size={30}/> ),
            tabBarActiveTintColor: '#b66088',
            tabBarInactiveTintColor: 'gray'        
          }} 
        />
        <Tab.Screen 
          name="Scoreboard" 
          component={Scoreboard} 
          options={{
            tabBarIcon: () => (
              <Entypo name="trophy" 
              size={30}/> ),
            tabBarActiveTintColor: '#b66088',
            tabBarInactiveTintColor: 'gray'        
          }} 
        />
      </Tab.Navigator>
      
    </NavigationContainer>
    <Footer/>
    </>
    
  );
}

