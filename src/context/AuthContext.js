// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { BASE_URL } from '../config';
import { AsyncStorage } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [token, setToken] = useState();

  // const navigation = useNavigation();

  const register = async (username, selectOption) => {
    setIsLoading(true);

    
  };





  

  const login = async (username, password) => {
    setIsLoading(true);
    
    var obj = {
      username: username,
      password: password
    }
    const resp = await axios.post(`${BASE_URL}/login`, obj).then(async (res) => {
      setToken(res.data.token)
      if (res.data.status == 200) {
        await AsyncStorage.setItem(
          "token", res.data.token
        );
        console.warn('Login Successfully');
        navigation.navigate('createProfile')
      } else {
        console.warn('Somthing Wrong');
      }
    })
      .catch((err) => {
        console.warn(err);
      });
  };


  async function getToken() {
    var tkn = await AsyncStorage.getItem(
      "token"
    );
    setToken(tkn)
  }


  useEffect(() => {
    getToken()
  }, [])


  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        // logout,
        token,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
