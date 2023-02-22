import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import SocialSignIn from '../../components/socialSignInButtons/SocialSignIn';
import {RadioButton} from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../../context/AuthContext';

const ProductScreen = () => {
  const [value, setValue] = React.useState('first');
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [shouldShow, setShouldShow] = useState(true);

  const {height} = useWindowDimensions();
  // const navigation = useNavigation();
  // const {isLoading, login} = useContext(AuthContext);

  const onSignInpress = () => {
    setShouldShow(false);
    // console.log(AsyncStorage.getItem());
    console.warn('sign up press');
    // login(username, password);

    //validate user
    // navigation.navigate('Home');
  };

  const OnSignupCC = () => {
    setShouldShow(true);
    console.warn("signup press");
    // navigation.navigate("SignUp")
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        {
          shouldShow ? (
            <>
              <Text style={styles.titleText}>I am</Text>
              <RadioButton.Group
                onValueChange={newValue => setValue(newValue)}
                value={value}>
                  
                <View style={{flexDirection: 'row', marginLeft: '4%', marginBottom: '8%'}}>
                  <RadioButton value="Artist" color="#008181"/>
                  <Text style={{marginTop: 7, marginRight: 20}}>Artist</Text>
                  <RadioButton value="Venue" color="#008181"/>
                  <Text style={{marginTop: 7, marginRight: 20}}>Venue</Text>
                  <RadioButton value="Fan" color="#008181"/>
                  <Text style={{marginTop: 7, marginRight: 20}}>Fan</Text>
                </View>
              </RadioButton.Group>

              <CustomButton text="Continue" onPress={onSignInpress} type="PRIMARY" />
            </>
          ) : 

          <>
          <Text style={styles.signUpContent}>
          Sign up to see photos, videos, events & podcasts from underground
          Artists & Venues.
          </Text>
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <CustomButton text="Continue" onPress={OnSignupCC} type="PRIMARY" />
    
          <Text style={styles.Privacy}>
            By signing up, you agree to our Terms, Data Policy, and Cookies Policy.
          </Text>
          <Text style={styles.OrStyle}>or Sign up with</Text>
    
          <SocialSignIn />
       </>
        }
        
      {/* {
        shouldShow ? (
         <>
            <Text style={styles.signUpContent}>
            Sign up to see photos, videos, events & podcasts from underground
            Artists & Venues.
            </Text>
            <CustomInput
              placeholder="Username"
              value={username}
              setValue={setUsername}
            />
            <CustomInput
              placeholder="Password"
              value={password}
              setValue={setPassword}
              secureTextEntry
            />
            <CustomButton text="Continue" onPress={onSignInpress} type="PRIMARY" />
      
            <Text style={styles.Privacy}>
              By signing up, you agree to our Terms, Data Policy, and Cookies Policy.
            </Text>
            <Text style={styles.OrStyle}>or Sign up with</Text>
      
            <SocialSignIn />
         </>
  
        ) : null
      }
      */}
      {/* <CustomButton 
                    text="Don't have an account? Create one" 
                    onPress={OnSignupCC} 
                    type="TERTIARY" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  signUpContent: {
    fontSize: 16,
    color: '#929292',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    // textAlign: 'center'
  },
  OrStyle: {
    fontSize: 14,
    color: '#929292',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: -8,
  },
  Privacy: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 14,
    color: '#929292',
  },
  titleText: {
    fontSize: 41,
    color: '#000',
    marginTop: 20,
    fontWeight: '400',
    marginBottom: 20,
    // height: 110
  }
});

export default ProductScreen;
