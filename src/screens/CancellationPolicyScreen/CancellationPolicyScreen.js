import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CancellationPolicyScreen = () => {
  return (
    <View style={{
      backgroundColor: '#fff',
      paddingTop: 25,
      paddingBottom: 25,
      paddingLeft: 10,
      paddingRight: 10,
    }}>
      <Text style={styles.cancelheading}>Cancellation Policy</Text>
      <Text style={styles.cancelText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Text>
      <Text style={styles.cancelText}>the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  cancelheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  cancelText: {
    fontSize: 20,
    marginBottom: 20
  },

});

export default CancellationPolicyScreen