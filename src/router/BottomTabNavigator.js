import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EmergencyNumberScreen from '../screens/EmergencyNumberScreen';
import VideoScreen from '../screens/VideoScreen';
import AboutScreen from '../screens/AboutScreen';
import Clima from '../screens/Clima';


const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Emergency"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f4511e',
      }}
    >
      <Tab.Screen 
        name="Emergency" 
        component={EmergencyNumberScreen} 
        options={{ tabBarLabel: 'Emergencia' }} 
      />
       <Tab.Screen 
        name="Clima" 
        component={Clima} 
        options={{ tabBarLabel: 'Clima' }} 
      />
      <Tab.Screen 
        name="Video" 
        component={VideoScreen} 
        options={{ tabBarLabel: 'Video' }} 
      />
      <Tab.Screen 
        name="About" 
        component={AboutScreen} 
        options={{ tabBarLabel: 'About' }} 
      />
      
    </Tab.Navigator>
  );
}
