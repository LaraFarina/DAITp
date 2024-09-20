import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AlertaError from './AlertaError.js';

const EmergencyNumberScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [storedNumber, setStoredNumber] = useState('');

    useEffect(() => {
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
        if (/^\d{10}$/.test(phoneNumber)) {
            try {
                await AsyncStorage.setItem('emergencyPhoneNumber', phoneNumber);
                setStoredNumber(phoneNumber); // Actualizar el número almacenado
                setPhoneNumber(''); // Limpiar el campo de entrada
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
    storedNumber: {
        marginTop: 20,
        fontSize: 16,
    },
    noNumber: {
        marginTop: 20,
        fontSize: 16,
        color: 'grey',
    },
});

export default EmergencyNumberScreen;