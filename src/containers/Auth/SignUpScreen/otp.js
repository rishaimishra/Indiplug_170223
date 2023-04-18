/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';
import CustomButton from '../../../components/Ui/customButton';
import { AuthContext } from '../../../context/AuthContext';
// Constants
import styles from './styles';
import colors from '../../../constants/colors';

function OtpScreen({ user, handleThirdScreen }) {
  const [password, setPassword] = useState();
  const [otp, setOtp] = useState();
  const { isLoading, setPassAndVerifyOtp } = useContext(AuthContext);

  const handleSetPassword = async () => {
    if (!otp && !password) {
      Toast.showWithGravity('Please enter all the values', Toast.SHORT, Toast.TOP);
    } else {
      const resp = await setPassAndVerifyOtp(otp, user.lastid, password);
      if (resp) {
        Toast.showWithGravity(resp.data.message, Toast.SHORT, Toast.TOP);
        setOtp('');
        setPassword('');
        handleThirdScreen(resp.data);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signUpContent}>
        Sign up to see photos, videos, events & podcasts from underground Artists & Venues.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={otp}
          autoCapitalize="none"
          onChangeText={(text) => setOtp(text)}
          placeholder="Enter OTP"
          placeholderTextColor={colors.greyText2}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry
          value={password}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          placeholder="Set Password"
          placeholderTextColor={colors.greyText2}
          style={styles.input}
        />
      </View>
      <CustomButton
        style={styles.continueButton}
        text="Continue"
        onPress={handleSetPassword}
        type="PRIMARY"
        isLoading={isLoading}
      />

      <Text style={styles.content}>
        By signing up, you agree to our <Text style={styles.primaryText}>Terms, Data Policy</Text>,
        and <Text style={styles.primaryText}>Cookies Policy</Text>.
      </Text>
    </View>
  );
}

export default OtpScreen;
