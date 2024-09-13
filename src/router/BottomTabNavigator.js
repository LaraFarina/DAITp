import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EmergencyNumberScreen from '../screens/EmergencyNumberScreen';
import VideoScreen from '../screens/VideoScreen';
import AboutScreenLara from '../screens/AboutScreenLara.js';
import AboutScreenVicente from '../screens/AboutScreenVicente';
import AboutScreenEitan from '../screens/AboutScreenEitan';


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
        name="Video" 
        component={VideoScreen} 
        options={{ tabBarLabel: 'Video' }} 
      />
      <Tab.Screen 
        name="AboutEitan" 
        component={AboutScreenEitan} 
        options={{ tabBarLabel: 'Acerca de Eitan' }} 
      />
      <Tab.Screen 
        name="AboutLara" 
        component={AboutScreenLara} 
        options={{ tabBarLabel: 'Acerca de Lara' }} 
      />
      <Tab.Screen 
        name="AboutVicente" 
        component={AboutScreenVicente} 
        options={{ tabBarLabel: 'Acerca de Vicente' }} 
      />

    </Tab.Navigator>
  );
}
