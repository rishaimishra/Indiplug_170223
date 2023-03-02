import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Naviation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/AuthContext';
// Screens
import Splash from './containers/Intro';
import Auth from './containers/Auth';
import Home from './containers/Home';

const Stack = createNativeStackNavigator();

function App() {
  const [token, setToken] = useState(null);

  async function getToken() {
    const tkn = await AsyncStorage.getItem('token');
    setToken(tkn);
  }

  useEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          {!token && <Stack.Screen name="Auth" component={Auth} />}
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
