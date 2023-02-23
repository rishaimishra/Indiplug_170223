import React, { useContext, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
// import Toast from 'react-native-simple-toast';
import CustomButton from '../../../components/Ui/customButton';
import SocialSignIn from '../../../components/Ui/socialSignInButtons';

import { AuthContext } from '../../../context/AuthContext';

import styles from './styles';

function SignInScreen() {
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useContext(AuthContext);

  const handleSignIn = async () => {
    // Toast.show('Please enter your email');
    if (!userEmail) {
      alert('Please enter your email');
    } else if (!password) {
      alert('Please enter your password');
    } else {
      setIsLoading(true);
      await login(userEmail, password);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={userEmail}
          onChangeText={(text) => setUserEmail(text)}
          placeholder="Your Email"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
      </View>
      <CustomButton text="Forgot password?" type="TERTIARY" />
      <CustomButton text="Sign In" type="PRIMARY" onPress={handleSignIn} isLoading={isLoading} />
      <Text style={styles.OrStyle}>or Sign In with</Text>
      <SocialSignIn />
    </View>
  );
}

export default SignInScreen;
