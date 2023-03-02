import React from 'react';
import { Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import colors from '../../../constants/colors';
import Normalize from '../../../helpers/Dimens';

// eslint-disable-next-line react/prop-types
function CustomButton({ onPress, text, type, bgColor, fgColor, isLoading, style }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={isLoading}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
        style,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.white} size="small" />
      ) : (
        <Text style={[styles.text, styles[`text_${type}`], fgColor ? { color: fgColor } : {}]}>
          {text}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: Normalize(12),
    marginVertical: Normalize(5),
    alignItems: 'center',
    borderRadius: Normalize(8),
  },
  container_PRIMARY: {
    backgroundColor: colors.primary,
  },
  container_SECONDARY: {
    borderColor: colors.secondary,
    borderWidth: Normalize(2),
  },
  container_UPLOAD: {
    backgroundColor: colors.upload,
    width: '70%',
    marginLeft: '15%',
  },
  container_TERTIARY: {},
  container_CANCEL: {
    backgroundColor: colors.bgInput,
  },
  text: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: Normalize(14),
  },
  text_TERTIARY: {
    color: colors.grey,
  },
  text_CANCEL: {
    color: colors.grey,
  },
  text_SECONDARY: {
    color: colors.secondary,
  },
  text_UPLOAD: {
    color: colors.primary,
    fontSize: Normalize(16),
    fontWeight: '580',
  },
  text_or_sign_with: {
    color: colors.grey,
    fontSize: Normalize(12),
    marginTop: -15,
  },
});

export default CustomButton;
