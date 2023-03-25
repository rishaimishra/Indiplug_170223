import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import styles from './styles';

// Screens
import IAmScreen from './iAM';
import SignUp from './SignUpScreen';
import OtpScreen from './otp';

function SignUpContainer() {
  const navigation = useNavigation();

  const [step, setStep] = useState(1);
  const [category, setCategory] = useState(null);
  const [user, setUser] = useState(null);

  const reset = (name) => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name }],
    });
    navigation.dispatch(resetAction);
  };

  const onSelectCategory = (val) => {
    setCategory(val);
    setStep(2);
  };

  const onSignUp = (val) => {
    console.log(val);
    setUser(val);
    setStep(3);
  };

  const onPasswordSet = () => {
    reset('Auth');
  };

  return (
    <View style={styles.container}>
      {step === 1 && <IAmScreen handleFirstScreen={(value) => onSelectCategory(value)} />}
      {step === 2 && <SignUp category={category} handleSecondScreen={(value) => onSignUp(value)} />}
      {step === 3 && <OtpScreen user={user} handleThirdScreen={(value) => onPasswordSet(value)} />}
    </View>
  );
}

export default SignUpContainer;
