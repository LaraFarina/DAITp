import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';

const Clima = () => {
  const [location, setLocation] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getLocationAndWeather = async () => {
      // Obtener permisos de ubicación
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Permiso de ubicación denegado');
        return;
      }

      // Obtener ubicación
      let currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;
      setLocation({ latitude, longitude });
      fetchWeather(latitude, longitude);
    };

    // Obtener la hora actual
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    getLocationAndWeather();

    return () => clearInterval(timer);
  }, []);

  const fetchWeather = async (lat, lon) => {
    try {
      const API_KEY = 'a31b8c039f5a5f24dc804b5b4f91a26f'; 
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      setTemperature(response.data.main.temp);
    } catch (error) {
      console.error(error);
      setErrorMessage('Error al obtener el clima');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hora actual: {currentTime}</Text>
      {errorMessage ? (
        <Text style={styles.error}>{errorMessage}</Text>
      ) : (
        <>
          {location && (
            <Text style={styles.text}>
              Ubicación: {location.latitude}, {location.longitude}
            </Text>
          )}
          {temperature !== null && (
            <Text style={styles.text}>Temperatura: {temperature} °C</Text>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
});

export default Clima;
