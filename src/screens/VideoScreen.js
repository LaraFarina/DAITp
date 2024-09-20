import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VideoScreen = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [savedUrl, setSavedUrl] = useState('');

  useEffect(() => {
    // Cargar la URL guardada al iniciar
    const loadSavedUrl = async () => {
      const url = await AsyncStorage.getItem('lastVideoUrl');
      if (url) {
        setSavedUrl(url);
        setVideoUrl(url); // Establece la URL en el TextInput
      }
    };
    loadSavedUrl();
  }, []);

  const handleSaveUrl = async () => {
    if (videoUrl) {
      await AsyncStorage.setItem('lastVideoUrl', videoUrl);
      setSavedUrl(videoUrl);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese la URL del video"
        value={videoUrl}
        onChangeText={setVideoUrl}
      />
      <Button title="Guardar URL" onPress={handleSaveUrl} />

      {savedUrl ? (
        <Video
          source={{ uri: savedUrl }}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
          isLooping
          shouldPlay
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  video: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
});

export default VideoScreen;
