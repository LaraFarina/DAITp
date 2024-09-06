import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router/router'; // Asegúrate de que la ruta sea correcta

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Router />  {/* Usa el componente Router para manejar la navegación */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
