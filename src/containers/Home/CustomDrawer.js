import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';

function CustomDrawer({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View>
          <DrawerItem
            label={(focused) => <Text style={styles.drawerMenu}> Create Profile</Text>}
            onPress={() => {
              navigation.navigate('Create');
            }}
          />
          <DrawerItem
            label={() => <Text style={styles.drawerMenu}>Profile</Text>}
            onPress={() => {
              navigation.navigate('Profile');
            }}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerMenu: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CustomDrawer;
