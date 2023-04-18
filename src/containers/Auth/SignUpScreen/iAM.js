import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Toast from 'react-native-simple-toast';
import CustomButton from '../../../components/Ui/customButton';
import styles from './styles';
import RadioButton from '../../../components/Ui/radioButton';

// eslint-disable-next-line react/prop-types
function IAmScreen({ handleFirstScreen }) {
  const [selectOption, setSelectOption] = useState('');

  const [radioButtons] = useState([
    {
      id: '1',
      label: 'Artist',
      value: 'artist',
    },
    {
      id: '2',
      label: 'Venue',
      value: 'venue',
    },
    {
      id: '3',
      label: 'Fan',
      value: 'fan',
    },
  ]);

  const onSelectRadioBtn = () => {
    if (selectOption) handleFirstScreen(selectOption);
    else Toast.showWithGravity('Please select one option', Toast.SHORT, Toast.TOP);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>I am</Text>
      <RadioButton
        style={styles.radioContainer}
        group={radioButtons}
        onSelect={(val) => setSelectOption(val)}
      />

      <CustomButton text="Continue" onPress={onSelectRadioBtn} type="PRIMARY" />
    </View>
  );
}

export default IAmScreen;
