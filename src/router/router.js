import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from '../screens/Screen01.js';
import EmergencyNumberScreen from '../screens/EmergencyNumberScreen.js';
import VideoScreen from '../screens/VideoScreen.js';

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

      {/* Pantalla Screen01 */}
      <Stack.Screen
        name="Screen01"
        component={Screen01}
        options={{
          title: 'Home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
        }}
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
    </Stack.Navigator>
  );
}
