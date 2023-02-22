import React, {useState, useContext} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import SocialSignIn from '../../components/socialSignInButtons/SocialSignIn';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';

const NewPasswordScreen= () =>{
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    const {isLoading, sendOtp} = useContext(AuthContext);

    
    const onSendpress = () =>{
       // console.warn("confirm press");
       sendOtp(email);

        //after email validation
        navigation.navigate('VerifyOtp')
    }

    // const OnResendPress = () =>{
    //     console.warn("resend press");
    // }
    const OnSigninPress = () =>{
        //console.warn("signin press");

        navigation.navigate("SignIn")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password</Text>
                <CustomInput placeholder="Enter your email" value={email} setValue={setEmail} />
                
                {/* <CustomInput placeholder="Mobile" value={mobile} setValue={setMobile} />
                <CustomInput placeholder="Email" value={email} setValue={setEmail} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
                <CustomInput placeholder="Repeat Password" value={reppassword} setValue={setRepPassword} secureTextEntry /> */}
                <CustomButton text="Send" onPress={onSendpress} type="PRIMARY" />

                {/* <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '} 
                    <Text style={styles.link} onPress={OnTermsOfUsePress} >Terms of Use</Text> and{' '} 
                    <Text style={styles.link} onPress={OnPrivacyPolicyPress} >Privacy Policy</Text> 
                </Text> */}

                {/* <CustomButton 
                    text="Resend code" 
                    onPress={OnResendPress} 
                    type="SECONDARY" /> */}

                <CustomButton 
                    text="Back to Sign In" 
                    onPress={OnSigninPress} 
                    type="TERTIARY" />

               
            </View>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    logo:{
        width: '70%',
        maxWidth: 200,
        maxHeight: 200,
        marginBottom: 0
    },
    root:{
        alignItems: 'center',
        padding: 20
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10
    },
    text:{
        color: 'gray',
        marginVertical: 10
    },
    link:{
        color: '#FDB075',

    }
})

export default NewPasswordScreen;

