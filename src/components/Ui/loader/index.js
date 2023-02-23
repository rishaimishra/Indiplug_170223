import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import colors from '../../../constants/colors';

export default function index() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafa',
  },
});
