import React, { useContext, useState } from 'react';
import { View, StatusBar, TextInput } from 'react-native';
import { Text, ScrollView, Image, Box } from 'native-base';
import Toast from 'react-native-simple-toast';
import CustomButton from '../../../components/Ui/customButton';
import { AuthContext } from '../../../context/AuthContext';
import styles from './styles';
import colors from '../../../constants/colors';
import images from '../../../constants/images';

export default function ForgotPassword({ navigation }) {
  const { isLoading, POST } = useContext(AuthContext);

  const [userEmail, setUserEmail] = useState();
  const [otp, setOtp] = useState();
  const [password, setPassword] = useState();
  const [confPassword, setConfPassword] = useState();
  const [isOtoVerified, setIsOtoVerified] = useState(false);

  const isEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

  const handleEmailSubmit = async () => {
    if (!isEmail(userEmail)) {
      Toast.showWithGravity('Please enter a valid email', Toast.SHORT, Toast.TOP);
    } else {
      const body = { username: userEmail };
      try {
        const response = await POST('/user-auth/send-otp-verification', body);
        console.log(response);
        if (response.data.status === 200) setIsOtoVerified(true);
        else Toast.showWithGravity('Please try again', Toast.SHORT, Toast.TOP);
      } catch (error) {
        Toast.showWithGravity('Please try again', Toast.SHORT, Toast.TOP);
      }
    }
  };

  const handleForgotPass = async () => {
    if (!otp) {
      Toast.showWithGravity('Please enter your OTP', Toast.SHORT, Toast.TOP);
    } else if (!password) {
      Toast.showWithGravity('Please enter your password', Toast.SHORT, Toast.TOP);
    } else if (password !== confPassword) {
      Toast.showWithGravity('Password & Confirm Password should be same', Toast.SHORT, Toast.TOP);
    } else {
      const body = {
        otp,
        password,
      };
      try {
        const response = await POST('/user-auth/verify-otp-reset-password', body);
        if (response.data.status === 200) {
          setUserEmail('');
          setOtp('');
          setPassword('');
          setIsOtoVerified(false);
          navigation.navigate('Auth');
          Toast.showWithGravity('Password Changed Successfully', Toast.SHORT, Toast.TOP);
        } else {
          Toast.showWithGravity('Please try again', Toast.SHORT, Toast.TOP);
        }
      } catch (error) {
        Toast.showWithGravity('Please try again', Toast.SHORT, Toast.TOP);
      }
    }
  };

  return (
    <ScrollView bg={colors.white} keyboardShouldPersistTaps="handled">
      <StatusBar backgroundColor={colors.white} />

      <Box p="6" mt="20%">
        <Image source={images.logo} resizeMode="contain" w="150" alt="logo" />
        <Text fontSize="4xl" ml="2" mb="15" color="black" w="50%">
          {isOtoVerified ? 'Set password' : 'Reset password'}
        </Text>
        {!isOtoVerified && (
          <Box>
            {/* Email */}
            <Text mt="10" fontSize="md" color="dark.300">
              An email containing unique code will be sent to the mailbox. Please check it.
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={userEmail}
                autoCapitalize="none"
                onChangeText={(text) => setUserEmail(text)}
                placeholder="Your Email"
                placeholderTextColor={colors.greyText2}
                style={styles.input}
              />
            </View>
          </Box>
        )}
        {isOtoVerified && (
          <Box mt="10">
            {/* OTP */}
            <View style={styles.inputContainer}>
              <TextInput
                value={otp}
                autoCapitalize="none"
                onChangeText={(text) => setOtp(text)}
                placeholder="Enter the code recieved on email"
                placeholderTextColor={colors.greyText2}
                style={styles.input}
              />
            </View>
            {/* New Password */}
            <View style={styles.inputContainer}>
              <TextInput
                value={password}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                placeholder="New Password"
                placeholderTextColor={colors.greyText2}
                style={styles.input}
                secureTextEntry
              />
            </View>
            {/* Confirm Password */}
            <View style={styles.inputContainer}>
              <TextInput
                value={confPassword}
                autoCapitalize="none"
                onChangeText={(text) => setConfPassword(text)}
                placeholder="Confirm Password"
                placeholderTextColor={colors.greyText2}
                style={styles.input}
                secureTextEntry
              />
            </View>
          </Box>
        )}

        <CustomButton
          text={isOtoVerified ? 'Submit' : 'Submit Email'}
          type="PRIMARY"
          onPress={isOtoVerified ? handleForgotPass : handleEmailSubmit}
          isLoading={isLoading}
          style={styles.btnStyle}
        />
        <CustomButton
          text="Sign in"
          type="TERTIARY"
          onPress={() => navigation.navigate('Auth')}
          isLoading={isLoading}
          style={styles.btnStyle}
        />
      </Box>
    </ScrollView>
  );
}
