import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EmergencyNumberScreen from '../screens/EmergencyNumberScreen.js';
import VideoScreen from '../screens/VideoScreen.js';
import AboutScreen from '../screens/AboutScreen.js';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Emergencia">
      {/* Pantalla de Emergencia */}
      <Stack.Screen
        name="Emergencia"
        component={EmergencyNumberScreen}
        options={{ headerShown: false }}
      />

      {/* Pantalla VideoScreen */}
      <Stack.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{
          title: 'Video Player',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
        }}
      />

      {/* Pantalla AboutScreen */}
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'Acerca de',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}
