import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type, bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress} style={[
      styles.container, 
      styles[`container_${type}`],
      bgColor ? {backgroundColor: bgColor}: {}
      ]}>
      <Text style={[
        styles.text, styles[`text_${type}`],
        fgColor ? {color: fgColor}: {}
        ]}>{text}</Text>
    </Pressable>
  )
}

const styles= StyleSheet.create({
  container:{
    
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY:{
    backgroundColor: "#008181",

  },
  container_SECONDARY:{
    borderColor: "#3B71F3",
    borderWidth: 2

  },
  container_TERTIARY:{},
  text:{
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  text_TERTIARY:{
    color: '#626060'
  },
  text_SECONDARY:{
    color: '#3B71F3'
  },
  text_or_sign_with:{
    color: '#929292',
    fontSize: 13,
    // height: 10
    marginTop: -15
  },
})

export default CustomButton