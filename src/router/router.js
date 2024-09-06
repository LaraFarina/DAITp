import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EmergencyNumberScreen from '../screens/EmergencyNumberScreen';
import VideoScreen from '../screens/VideoScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="EmergencyNumber">
      <Stack.Screen
        name="EmergencyNumber"
        component={EmergencyNumberScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{
          title: 'Video Player',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="AboutScreen"
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
