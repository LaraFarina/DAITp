import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { BarCodeScanner } from 'expo-barcode-scanner';

const AboutScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setModalVisible(false);

    // Navegar a la pantalla correspondiente basándose en el QR escaneado
    if (data === 'lara') {
      navigation.navigate('Lara');
    } else if (data === 'vicente') {
      navigation.navigate('Vicente');
    } else if (data === 'eitan') {
      navigation.navigate('Eitan');
    } else {
      alert('Código QR no reconocido');
    }
  };

  if (hasPermission === null) {
    return <Text>Solicitando permiso para la cámara...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sin acceso a la cámara</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de</Text>

      <View style={styles.qrContainer}>
        <QRCode value="Hecho por: Lara, Eitan y Vicente" size={100} />
      </View>

      <Button title="Escanear QR" onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          <Button title="Cerrar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  qrContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
});

export default AboutScreen;
