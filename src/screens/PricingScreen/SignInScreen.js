import React, {useContext, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, useWindowDimensions} from 'react-native';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import SocialSignIn from '../../components/socialSignInButtons/SocialSignIn';

// import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../../context/AuthContext';

const SignInScreen = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const {height} = useWindowDimensions();
    // const navigation = useNavigation();
    // const {isLoading, login} = useContext(AuthContext);


    const onSignInpress = () =>{
        // console.log(AsyncStorage.getItem());
        console.warn("sign in press");
        // login(username, password);
        

        //validate user
        // navigation.navigate('Home');
    }
    
    const onForgotPasswordpress = () =>{
       // console.warn("forgot password press");

        // navigation.navigate("NewPassword")
    }
    const OnSignupCC = () =>{
       // console.warn("signup press");

        // navigation.navigate("SignUp")
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 25 }}>
             <CustomInput 
                placeholder="Your Email" 
                value={username} 
                setValue={setUsername} />
                <CustomInput  
                    placeholder="Password" 
                    value={password} 
                    setValue={setPassword} 
                    secureTextEntry />
                <CustomButton text="Forgot password?" onPress={onForgotPasswordpress} type="TERTIARY" />
                <CustomButton text="Sign In" onPress={onSignInpress} type="PRIMARY" />

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




const styles= StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20
    },
    OrStyle:{
        fontSize: 14,
        color: '#929292',
        textAlign: 'center'
    }
})

export default SignInScreen;

