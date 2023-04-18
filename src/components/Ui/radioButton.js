/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';
import Normalize from '../../helpers/Dimens';

const { width } = Dimensions.get('window');

export default function RadioButton({ group, onSelect, style }) {
  const [userOption, setUserOption] = useState(null);

  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };

  return (
    <View style={[styles.container, style]}>
      {group.map((btn) => (
        <TouchableOpacity
          key={btn.id}
          style={styles.btnContainer}
          onPress={() => selectHandler(btn.value)}
        >
          <View style={styles.outerCircle}>
            <View style={btn.value === userOption ? styles.innerCircle : null} />
          </View>
          <Text style={styles.btnText}>{btn.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Normalize(15),
  },
  outerCircle: {
    width: Normalize(width / 18),
    height: Normalize(width / 18),
    borderColor: colors.primary,
    borderWidth: Normalize(1.5),
    borderRadius: Normalize(width / 15 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: Normalize(width / 24),
    height: Normalize(width / 24),
    backgroundColor: colors.primary,
    borderRadius: Normalize(width / 20 / 2),
  },
  btnText: {
    fontSize: Normalize(width / 25),
    marginLeft: Normalize(10),
    color: colors.greyText2,
  },
});
