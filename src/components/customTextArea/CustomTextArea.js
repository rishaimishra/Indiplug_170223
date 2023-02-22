import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.textArea}
        secureTextEntry={secureTextEntry}
        numberOfLines={10}
        multiline={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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
  textArea: {
    height: 100,
    justifyContent: "flex-start"
  }
})

export default CustomInput;