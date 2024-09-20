import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Video from 'react-native-video';

export default function VideoScreen() {
  const [videoUrl, setVideoUrl] = useState('');
  const [savedVideoUrl, setSavedVideoUrl] = useState('');

  // Cargar el URL del video almacenado en AsyncStorage al montar la pantalla
  useEffect(() => {
 import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Video from 'react-native-video';

export default function VideoScreen() {
  const [videoUrl, setVideoUrl] = useState('');
  const [savedVideoUrl, setSavedVideoUrl] = useState('');

  // Cargar el URL del video almacenado en AsyncStorage al montar la pantalla
  useEffect(() => {
    const loadVideoUrl = async () => {
      const url = await AsyncStorage.getItem('videoUrl');
      if (url !== null) {
        setSavedVideoUrl(url);
      }
    };, []);

  // Guardar el URL del video en AsyncStorage
  const saveVideoUrl = async () => {
    await AsyncStorage.setItem('videoUrl', videoUrl);
    setSavedVideoUrl(videoUrl);
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa la URL del video:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setVideoUrl}
        value={videoUrl}
        placeholder="Escribe la URL del video"
        keyboardType="url"
      />
      <Button title="Guardar URL" onPress={saveVideoUrl} />

      {savedVideoUrl ? (
        <View style={styles.videoContainer}>
          <Text style={styles.subtitle}>Reproduciendo video:</Text>
          <Video
            source={{ uri: savedVideoUrl }}
            style={styles.videoPlayer}
            controls
            resizeMode="contain"
          />
        </View>
      ) : (
        <Text style={styles.subtitle}>No hay video guardado</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  videoContainer: {
    marginTop: 20,
  },
  videoPlayer: {
    width: '100%',
    height: 200,
  },
});

  // Guardar el URL del video en AsyncStorage
  const saveVideoUrl = async () => {
    try {
      await AsyncStorage.setItem('videoUrl', videoUrl);
      setSavedVideoUrl(videoUrl);
    } catch (e) {
      console.error('Error al guardar el URL', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa la URL del video:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setVideoUrl}
        value={videoUrl}
        placeholder="Escribe la URL del video"
        keyboardType="url"
      />
      <Button title="Guardar URL" onPress={saveVideoUrl} />

      {savedVideoUrl ? (
        <View style={styles.videoContainer}>
          <Text style={styles.subtitle}>Reproduciendo video:</Text>
          <Video
            source={{ uri: savedVideoUrl }}
            style={styles.videoPlayer}
            controls
            resizeMode="contain"
          />
        </View>
      ) : (
        <Text style={styles.subtitle}>No hay video guardado</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  videoContainer: {
    marginTop: 20,
  },
  videoPlayer: {
    width: '100%',
    height: 200,
  },
});
