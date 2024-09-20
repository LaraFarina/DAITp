import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Modal, TouchableOpacity, Alert, Linking } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { CameraView, useCameraPermissions } from 'expo-camera'; // Cambia a Camera

const AboutScreen = () => {
  const [hasPermission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible,setModal2Visible] = useState(false)
  const [facing, setFacing] = useState("back");
  const [informacionScaneada,setInformacionScaneada] = useState(null)

  useEffect(() => {
    (async () => {
      if (!hasPermission) {
        const { status } = await requestPermission();
        if (status !== 'granted') {
          Alert.alert('Permiso de cámara denegado');
        }
      }
    })();
  }, [hasPermission]);

  const handleBarCodeScanned = async ({ type, data }) => {
    console.log("hola lelgamos a l afuncion")
    setScanned(true);
    setInformacionScaneada(data)
    setModalVisible(false);
    setModal2Visible(true)
    // Aquí puedes manejar el escaneo, por ejemplo, abrir la URL
    
    // Restablecer el escaneo después de un breve delay
    setTimeout(() => {
      setScanned(false);
      setModalVisible(true);
    }, 5000);
  };

  if (!hasPermission || hasPermission.status !== 'granted') {
    return <View style={styles.centeredView}><Text>Solicitando permisos para la cámara...</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de</Text>
      <View style={styles.qrContainer}>
        <QRCode value="Hecho por: Lara, Eitan y Vicente" size={100} />
      </View>
      <Button title="Escanear QR" onPress={() => setModalVisible(true)} />
      <Text>{informacionScaneada}</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.scannerContainer}>
            <CameraView
              style={{ flex: 1 }}
              type={facing}
              onBarcodeScanned={handleBarCodeScanned}
              barCodeScannerSettings={{
                barCodeTypes: ['qr'],
              }}
            />
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.scanningText}>Escaneando...</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setScanned(false);
                setModalVisible(false);
              }}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setFacing(facing === "back" ? "front" : "back");
              }}
            >
              <Text style={styles.closeButtonText}>Cambiar Cámara</Text>
            </TouchableOpacity>
            
          </View>
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'space-between',
  },
  scannerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scanningText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default AboutScreen;