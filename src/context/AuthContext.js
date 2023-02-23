import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, CommonActions } from '@react-navigation/native';
import BASE_URL from '../config';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [token, setToken] = useState();

  const navigation = useNavigation();

  async function getToken() {
    const tkn = await AsyncStorage.getItem('token');
    setToken(tkn);
  }

  useEffect(() => {
    getToken();
  }, []);

  const reset = (name) => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name }],
    });
    navigation.dispatch(resetAction);
  };

  const register = async (username, selectOption) => {
    setIsLoading(true);
  };

  const login = async (username, password) => {
    setIsLoading(true);
    const obj = {
      username,
      password,
    };
    await axios
      .post(`${BASE_URL}/login`, obj)
      .then(async (res) => {
        console.log('Login Response: ', res);
        setToken(res.data.token);
        if (res.data.status === 200) {
          await AsyncStorage.setItem('token', res.data.token);
          setIsLoading(false);
          reset('Home');
        } else {
          console.error('Somthing Wrong');
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error('Login Error: ', err);
        setIsLoading(false);
        alert('Please enter correct credentials');
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        register,
        login,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
