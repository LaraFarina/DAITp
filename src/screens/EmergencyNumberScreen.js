import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AlertaError from './AlertaError.js';

const EmergencyNumberScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [storedNumber, setStoredNumber] = useState('');

    useEffect(() => {
        // Cargar el número de emergencia almacenado al inicio
        const loadPhoneNumber = async () => {
            try {
                const number = await AsyncStorage.getItem('emergencyPhoneNumber');
                if (number) {
                    setStoredNumber(number);
                }
            } catch (error) {
                AlertaError.showError('No se pudo cargar el número de emergencia');
            }
        };
        loadPhoneNumber();
    }, []);

    const handleSave = async () => {
        // Verificar si el número es de 10 dígitos
        if (/^\d{10}$/.test(phoneNumber)) {
            try {
                // Guardar el número en AsyncStorage
                await AsyncStorage.setItem('emergencyPhoneNumber', phoneNumber);
                setStoredNumber(phoneNumber); // Actualizar el número almacenado
                setPhoneNumber(''); // Limpiar el campo de entrada
                setModalVisible(true); // Mostrar el modal con el número guardado
                Alert.alert('Éxito', 'Número de emergencia guardado correctamente');
            } catch (error) {
                AlertaError.showError('No se pudo guardar el número de emergencia');
            }
        } else {
            AlertaError.showError('Por favor, ingresa un número de 10 dígitos');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Número de Emergencia</Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Ingresa un número de teléfono"
                maxLength={10}
            />
            <Button title="Guardar" onPress={handleSave} />
             {/* Condicional para mostrar el número guardado o un mensaje */}
      {storedNumber ? (
        <Text style={styles.storedNumber}>Número guardado: {storedNumber}</Text>
      ) : (
        <Text style={styles.noNumber}>No hay ningún número guardado</Text>
      )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
    },
    modalContent: {
        width: '100%',
        padding: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalNumber: {
        fontSize: 24,
        color: '#333',
        marginBottom: 20,
    },
    closeButton: {
        padding: 10,
        backgroundColor: '#2196F3',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default EmergencyNumberScreen;