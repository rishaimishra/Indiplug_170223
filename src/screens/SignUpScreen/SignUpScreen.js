import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import SocialSignIn from '../../components/socialSignInButtons/SocialSignIn';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import RadioButtonRN from 'radio-buttons-react-native';


const SignUpScreen = () => {
  const [value, setValue] = React.useState('first');
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [otp, setOtp] = useState();
  const [selectOption, setSelectOption] = useState([]);
  const [shouldShow, setShouldShow] = useState(0);

  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const { isLoading, register } = useContext(AuthContext);



  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Artist',
      value: 'artist'
    },
    {
      id: '2',
      label: 'Venue',
      value: 'venue'
    },
    {
      id: '3',
      label: 'Fan',
      value: 'fan'
    }
  ]);


  function onPressRadioButton(data) {
    // setRadioButtons(radioButtonsArray);
    console.warn(data)
  }

  // onPressRadioButton= data => this.setState({ data });

  const onSignInpress = () => {
    setShouldShow(1);
    // console.log(AsyncStorage.getItem());
    console.warn(selectOption);
    // login(username, password);

    //validate user
    // navigation.navigate('Home');
  };


  const [registrationId, setRegistrationId] = useState('')
  const SignUp1 = async () => {
    setShouldShow(2);
    console.warn(username);

    var obj = {
      username: username,
      role: selectOption
    }
    const resp = await axios.post(`http://3.135.198.240/user-auth/register`, obj).then(async (res) => {
      console.warn(res.data)
      if (res.data?.otp) {
        setRegistrationId(res.data.lastid)
      }
    })
      .catch((err) => {
        console.warn(err);
      });
  };


  const SignUp2 = async () => {
    console.warn(username);
    var obj = {
      otp: otp,
      id: registrationId,
      password: password,
    }
    const resp = await axios.post(`http://3.135.198.240/user-auth/verify-otp`, obj).then(async (res) => {
      console.warn(res.data)
      if (res.data.status==400) {
        console.warn("wrong otp")
      }else{
        await AsyncStorage.setItem(
          "token", res.data.token
        );
        console.warn("OTP Verify Successfully")
        navigation.navigate('createProfile')
        
      }
    })
      .catch((err) => {
        console.warn(err);
      });
  };

  // const SignUp1 = async (event) => {
  //   // setShouldShow(true);
  //   // console.warn("signup press");
  //   // navigation.navigate("createProfile")
  //   // console.warn("signup press");

  //   var fd = new FormData();
  //   fd.append("username", username);
  //   fd.append("password", password);
  //   var obj = {
  //     username: username,
  //     password: password
  //   }
  //   const resp = await axios.post(`http://3.135.198.240/user-auth/register`, obj).then(async (res) => {
  //     console.warn(res.data.token)
  //     if (res.data.status == 200) {
  //       await AsyncStorage.setItem(
  //         "token", res.data.token
  //       );
  //       console.warn('Login Successfully');
  //       navigation.navigate('createProfile')
  //     } else {
  //       console.warn('Somthing Wrong');
  //     }
  //   })
  //     .catch((err) => {
  //       console.warn(err);
  //     });
  // };
  // a === true ? a : b === true ? b : c
  function rolefun() {
    console.warn("aaaa")
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      {
        shouldShow === 0 ? (
          <>
            <Text style={styles.titleText}>I am</Text>

            <View style={{ marginLeft: '4%', marginBottom: '8%' }}>
              <RadioButtonRN
                data={radioButtons}
                selectedBtn={(e) => setSelectOption(e.value)}
                boxStyle={{ width: '90%' }}
                textStyle={{ fontSize: 18 }}
              // style={{border:'none'}}
              />
            </View>
            {/* <View style={{ flexDirection: 'row', marginLeft: '4%', marginBottom: '8%' }}>
                <RadioButton checked={selectOption === 'Artist'} value="Artist" onClick={() => setSelectOption('Artist')} color="#008181" />
                <Text style={{ marginTop: 7, marginRight: 20 }}>Artist</Text>
                <RadioButton checked={selectOption === 'Venue'} value="Venue" onClick={() => setSelectOption('Venue')} color="#008181" />
                <Text style={{ marginTop: 7, marginRight: 20 }}>Venue</Text>
                <RadioButton checked={selectOption === 'Fan'} value="Fan" onClick={() => setSelectOption('Fan')} color="#008181" />
                <Text style={{ marginTop: 7, marginRight: 20 }}>Fan</Text>
              </View> */}

            <CustomButton text="Continue" onPress={onSignInpress} type="PRIMARY" />
          </>
        ) : shouldShow === 1 ? (
          <>
            <Text style={styles.signUpContent}>
              Sign up to see photos, videos, events & podcasts from underground
              Artists & Venues.
            </Text>
            {/* <CustomInput
              placeholder="Username"
              value={username}
              setValue={setUsername}
            /> */}
            <View style={styles.container}>
              <TextInput
                value={username}
                onChangeText={text => setUsername(text)}
                placeholder="Username"
                style={styles.input}
              />
            </View>
            <CustomButton text="Continue" onPress={SignUp1} type="PRIMARY" />

            <Text style={styles.Privacy}>
              By signing up, you agree to our Terms, Data Policy, and Cookies Policy.
            </Text>
            <Text style={styles.OrStyle}>or Sign up with</Text>

            <SocialSignIn />
          </>
        ) : (
          <>
            <Text style={styles.signUpContent}>
              Sign up to see photos, videos, events & podcasts from underground
              Artists & Venues.
            </Text>
            <CustomInput
              placeholder="Username"
              value={username}
              // setValue={setUsername}
              editable={false}
              selectTextOnFocus={false}
            />
            <Text style={styles.signUpContent}>
              OTP sent to email
            </Text>
            <CustomInput
              placeholder="Enter OTP"
              value={otp}
              setValue={setOtp}
            />
            <CustomInput
              placeholder="Set Password"
              value={password}
              setValue={setPassword}
              secureTextEntry
            />

            <CustomButton text="Continue"
              onPress={SignUp2}
              // onPress={() => {
              //   register(selectOption, username);
              // }}
              type="PRIMARY" />

            <Text style={styles.Privacy}>
              By signing up, you agree to our Terms, Data Policy, and Cookies Policy.
            </Text>
            <Text style={styles.OrStyle}>or Sign up with</Text>

            <SocialSignIn />
          </>
        )
      }

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
  },
  container: {
    backgroundColor: '#EBEBEB',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
    marginTop: 20
  },
});

export default SignUpScreen;
