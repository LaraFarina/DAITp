import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VicenteScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>¡Hola, soy Vicente!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default VicenteScreen;
