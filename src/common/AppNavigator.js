import {View, Text, StyleSheet} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from '../drawer/DrawerNavigator';
import TabViewScreen from '../screens/TabViewScreen';
import {AsyncStorage} from 'react-native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    getToken();
  }, []);

  async function getToken() {
    var tkn = await AsyncStorage.getItem('token');
    setToken(tkn);
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="navigator" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
});

export default AppNavigator;
