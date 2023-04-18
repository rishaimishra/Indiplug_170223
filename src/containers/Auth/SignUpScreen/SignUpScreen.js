/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';
import CustomButton from '../../../components/Ui/customButton';
import SocialSignIn from '../../../components/Ui/socialSignInButtons';
import { AuthContext } from '../../../context/AuthContext';
// Constants
import styles from './styles';
import colors from '../../../constants/colors';

function SignUpScreen({ category, handleSecondScreen }) {
  const [username, setUsername] = useState('');
  const { isLoading, register } = useContext(AuthContext);

  const isEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

  const handleSignUp = async () => {
    if (!isEmail(username)) {
      Toast.showWithGravity('Please enter a valid email', Toast.SHORT, Toast.TOP);
    } else {
      const resp = await register(username, category);
      if (resp) {
        Toast.showWithGravity('Please check your mail', Toast.SHORT, Toast.TOP);
        setUsername('');
        handleSecondScreen(resp.data);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Sign up to see photos, videos, events & podcasts from underground Artists & Venues.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={username}
          autoCapitalize="none"
          onChangeText={(text) => setUsername(text)}
          placeholder="Your Email"
          placeholderTextColor={colors.greyText2}
          style={styles.input}
        />
      </View>
      <CustomButton
        style={styles.continueButton}
        text="Continue"
        onPress={handleSignUp}
        type="PRIMARY"
        isLoading={isLoading}
      />

      <Text style={styles.content}>
        By signing up, you agree to our <Text style={styles.primaryText}>Terms, Data Policy</Text>,
        and <Text style={styles.primaryText}>Cookies Policy</Text>.
      </Text>
      <View style={styles.socialContainer}>
        <Text style={styles.OrStyle}>or Sign up with</Text>
        <SocialSignIn />
      </View>
    </View>
  );
}

export default SignUpScreen;
