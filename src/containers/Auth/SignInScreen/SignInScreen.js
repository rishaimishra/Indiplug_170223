import React, { useContext, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../../components/Ui/customButton';
import SocialSignIn from '../../../components/Ui/socialSignInButtons';

import { AuthContext } from '../../../context/AuthContext';
// Constants
import styles from './styles';
import colors from '../../../constants/colors';

function SignInScreen() {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  const isEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

  const { isLoading, login } = useContext(AuthContext);

  const handleSignIn = async () => {
    if (!isEmail(userEmail)) {
      Toast.showWithGravity('Please enter a valid email', Toast.SHORT, Toast.TOP);
    } else if (!password) {
      Toast.showWithGravity('Please enter your password', Toast.SHORT, Toast.TOP);
    } else {
      await login(userEmail, password);
    }
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.inputContainer}>
        <TextInput
          value={password}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          placeholderTextColor={colors.greyText2}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <CustomButton
        text="Forgot password?"
        type="TERTIARY"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
      <CustomButton text="Sign In" type="PRIMARY" onPress={handleSignIn} isLoading={isLoading} />
      <Text style={styles.OrStyle}>or Sign In with</Text>
      <SocialSignIn />
    </View>
  );
}

export default SignInScreen;
