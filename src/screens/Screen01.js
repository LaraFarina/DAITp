import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen01 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido a Screen01!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default Screen01;
