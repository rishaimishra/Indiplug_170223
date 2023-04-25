import React from 'react';
// Naviation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { AuthProvider } from './context/AuthContext';
// Screens
import Splash from './containers/Intro';
import Auth from './containers/Auth';
import Home from './containers/Home';
import ForgotPassword from './containers/Auth/ForgotPassword';
// Insider Screens
import ChatList from './containers/Home/Chat';
import Chat from './containers/Home/Chat/chat';
import CommentScreen from './containers/Home/Comment';
import QuotePlugScreen from './containers/Home/QuotePlug';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ChatList" component={ChatList} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Comments" component={CommentScreen} />
            <Stack.Screen name="QuotePlug" component={QuotePlugScreen} />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
