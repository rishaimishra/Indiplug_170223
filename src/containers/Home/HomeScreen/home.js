import { View, Text, Pressable } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>home</Text>
      <Pressable onPress={() => navigation.toggleDrawer()}>
        <Text>Open Drawer</Text>
      </Pressable>
    </View>
  );
}
