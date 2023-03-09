import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import { useNavigation, CommonActions } from '@react-navigation/native';
import BASE_URL from '../config';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const navigation = useNavigation();

  async function getToken() {
    const tkn = await AsyncStorage.getItem('token');
    const usr = await AsyncStorage.getItem('user');
    setToken(tkn);
    setUser(JSON.parse(usr));
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

  const register = async (userEmail, selectOption) => {
    let response;
    setIsLoading(true);
    const obj = {
      username: userEmail,
      role: selectOption,
    };
    try {
      response = await axios.post(`${BASE_URL}/user-auth/register`, obj);
      Toast.showWithGravity('Please try again.', Toast.SHORT, Toast.TOP);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      Toast.showWithGravity('Something went wrong.', Toast.SHORT, Toast.TOP);
      setIsLoading(false);
    }
    return response;
  };

  const setPassAndVerifyOtp = async (otp, id, password) => {
    let response;
    setIsLoading(true);
    const obj = {
      otp,
      id,
      password,
    };
    try {
      response = await axios.post(`${BASE_URL}/user-auth/verify-otp`, obj);
      Toast.showWithGravity('Please try again.', Toast.SHORT, Toast.TOP);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      Toast.showWithGravity('Something went wrong.', Toast.SHORT, Toast.TOP);
      setIsLoading(false);
    }
    return response;
  };

  const login = async (username, password) => {
    setIsLoading(true);
    const obj = {
      username,
      password,
    };
    await axios
      .post(`${BASE_URL}/user-auth/login`, obj)
      .then(async (res) => {
        console.log('res', res);
        if (res.data.status === 200) {
          setToken(res.data.token);
          await AsyncStorage.setItem('token', res.data.token);
          await AsyncStorage.setItem('user', JSON.stringify(res.data.user_details));
          setIsLoading(false);
          Toast.showWithGravity('Logged in successfully.', Toast.SHORT, Toast.TOP);
          reset('Home');
        } else {
          Toast.showWithGravity('Somthing went wrong.', Toast.SHORT, Toast.TOP);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error('Login Error: ', err);
        setIsLoading(false);
        Toast.showWithGravity('Please enter correct credentials.', Toast.SHORT, Toast.TOP);
      });
  };

  const createProf = async (data) => {
    let response;
    setIsLoading(true);

    const formData = new FormData();
    // formData.append('image', data.image);
    formData.append('name', data.name);
    formData.append('location', data.location);
    formData.append('genre', data.genre);
    formData.append('bio', data.bio);
    formData.append('user_id', user.id);

    try {
      response = await axios.post(`${BASE_URL}/user-auth/update-profile`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'auth-token': token,
        },
      });
      if (response.data.status === '200') {
        Toast.showWithGravity(response.data.message, Toast.SHORT, Toast.TOP);
      } else {
        Toast.showWithGravity('Please try again.', Toast.SHORT, Toast.TOP);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      Toast.showWithGravity('Something went wrong.', Toast.SHORT, Toast.TOP);
      setIsLoading(false);
    }
    return response;
  };
  const fetchProfileDetails = async () => {
    let response;
    setIsLoading(true);

    try {
      response = await axios.get(`${BASE_URL}/user-auth/user-details`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'auth-token': token,
        },
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      Toast.showWithGravity('Something went wrong.', Toast.SHORT, Toast.TOP);
      setIsLoading(false);
    }
    return response;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        register,
        login,
        setPassAndVerifyOtp,
        token,
        createProf,
        fetchProfileDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
