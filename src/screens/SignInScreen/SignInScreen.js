import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import SocialSignIn from '../../components/socialSignInButtons/SocialSignIn';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
// import {AuthContext} from '../context/AuthContext';

const SignInScreen = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // const {isLoading, login} = useContext(AuthContext);

  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const {isLoading, login} = useContext(AuthContext);


  const onSignInpress = async (event) => {

    // console.warn(username)
    // console.warn(password)
    // var fd = new FormData();
    // fd.append("username", username);
    // fd.append("password", password);
    // var obj={
    //   username: username,
    //   password: password
    // }
    //  const resp = await axios.post(`http://3.135.198.240/user-auth/login`, obj).then(async(res) => {
    //   console.warn(res.data.token)
    //   if (res.data.status == 200) {
    //     await AsyncStorage.setItem(
    //       "token",res.data.token
    //     );
    //     console.warn('Login Successfully');
    //     navigation.navigate('createProfile')
    //   } else {
    //     console.warn('Somthing Wrong');
    //   }
    // })
    //   .catch((err) => {
    //     console.warn(err);
    //   });
  }




  const onForgotPasswordpress = () => {
    // console.warn("forgot password press");

    // navigation.navigate("NewPassword")
  }
  const OnSignupCC = () => {
    // console.warn("signup press");

    // navigation.navigate("SignUp")
  }


  const handleSubmit = async (event) => {

  }




  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 25 }}>
      <View style={styles.container}>
        <TextInput
          value={username}
          onChangeText={text => setUsername(text)}
          placeholder="Your Email"
          style={styles.input}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
      </View>
      <CustomButton text="Forgot password?" onPress={() => console.warn(token)} 
      type="TERTIARY" />
      {/* <CustomButton text="Forgot password?" onPress={onForgotPasswordpress} type="TERTIARY" /> */}
      <CustomButton text="Sign In" onPress={() => {
            login(username, password);
            navigation.navigate('createProfile')
          }} type="PRIMARY" 
          // onLongPress={() => navigation.navigate('createProfile')}
          />

      {/* <SocialSignIn /> */}
      <Text style={styles.OrStyle}>or</Text>
      <Text style={styles.OrStyle}>Sign in with</Text>

      {/* <CustomButton 
                    text="Sign in with" 
                    onPress={OnSignupCC} 
                    type="or_sign_with" /> */}
      <SocialSignIn />

    </View>
  )

};




const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  OrStyle: {
    fontSize: 14,
    color: '#929292',
    textAlign: 'center'
  },
  container:{
    backgroundColor: '#EBEBEB',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
    marginTop: 20     
},
})

export default SignInScreen;

