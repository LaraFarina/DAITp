import React from 'react';
import { SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import Screen01 from './src/screens/Screen01';

const Stack = createStackNavigator();
const App = () => {
return (
    <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen name="LoginScreen" component={LoginScreen}
                    options={{ headerShown: false, headerStyle: { backgroundColor: '#f0f0f0' } }} />
                <Stack.Screen name="Screen01" component={Screen01}
                    options={({ navigation }) => ({
                    title: 'Screen01 titulo...',
                    headerStyle: { backgroundColor: '#f0f0f0' },
                })} />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
    );
};
export default App;