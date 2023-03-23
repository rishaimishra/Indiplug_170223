import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import Normalize from '../../helpers/Dimens';
import colors from '../../constants/colors';

function CustomInput({ value, setValue, placeholder, secureTextEntry }) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgInput,
    width: '100%',

    borderColor: colors.bgInput,
    borderWidth: 1,
    borderRadius: Normalize(8),

    paddingHorizontal: Normalize(10),
    marginVertical: Normalize(5),
    marginTop: Normalize(12),
  },
  input: {
    color: colors.greyText,
  },
});

export default CustomInput;
