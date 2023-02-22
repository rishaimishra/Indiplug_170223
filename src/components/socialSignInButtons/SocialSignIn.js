import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../customButton/CustomButton'
import Google from '../../assests/Google.png'

const SocialSignIn = () => {

    const onSigninFacebookpress = () =>{
        console.warn("fb press");
    }
    const onSigninGooglepress = () =>{
        console.warn("Google press");
    }
    
  return (
    <>
        {/* <CustomButton 
                    text="Sign In with Facebook" 
                    onPress={onSigninFacebookpress} 
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />
        <CustomButton 
                    text="Sign In with Google" 
                    onPress={onSigninGooglepress} 
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />         */}
                <Image source={Google} style={styles.GoogleStyle} />
    </>
  )
}

const styles= StyleSheet.create({
  
  GoogleStyle:{
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 25,
      // display: 'block'
      // flex: 1,
      width: 26,
      height: 26

  }
})


export default SocialSignIn