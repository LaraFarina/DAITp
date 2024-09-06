import { Alert, Vibration } from 'react-native';

const AlertaError = {
  showError: (message) => {
    Vibration.vibrate(400); // El 400 está medido en ms. Osea, va a vibrar 400ms

    Alert.alert(
      'Error',
      message,
      [{ text: 'OK' }],
      { cancelable: true }
    );
  },
};

export default AlertaError;
