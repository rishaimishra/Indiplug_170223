/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {StatusBar, View} from 'react-native';
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/common/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';
import Navigation from './src/navigation';
import UpdateProfile from './src/screens/UpdateProfile';

const App = () => {

  return (

    <View style={styles.root}>
      <AuthProvider>
        <StatusBar backgroundColor="#06bcee" />
        <AppNavigator />
      </AuthProvider>
    </View>

    // <AuthProvider>

    // <SafeAreaView style={styles.root}>
    //   {/* <Navigation /> */}
    //   <AppNavigator />
    // </SafeAreaView>

    // </AuthProvider>

  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f9fbfc'
  },
  // DrawerStyle:{
  //  backgroundColor: '#008181',
  //  color: '#fff',
  // },
  // DrawerItemStyle:{
  //  color: '#fff',
  // }
})


export default App;


