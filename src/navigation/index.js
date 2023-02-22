import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../../src/screens/WelcomeScreen';
import TabViewScreen from '../../src/screens/TabViewScreen';
import PinnedItems from '../../src/screens/PinnedItems';
import CreateProfile from '../../src/screens/CreateProfile';
import MyProfile from '../../src/screens/MyProfie';
import UpdateProfile from '../../src/screens/UpdateProfile';
import RatingScreen from '../../src/screens/RatingScreen';



const Stack = createNativeStackNavigator();

const Navigation = () => {

//   const {userInfo} = useContext(AuthContext);

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>
        <>
            <Stack.Screen name="welcome" component={WelcomeScreen} />
            <Stack.Screen name="SignUp" component={TabViewScreen} />

            <Stack.Screen name="createProfile" component={CreateProfile} />
            <Stack.Screen name="myprofiles" component={MyProfile} />
            <Stack.Screen name="updateProfile" component={UpdateProfile} />
            <Stack.Screen name="ratingScreen" component={RatingScreen} />
            <Stack.Screen name="addItems" component={PinnedItems} />

           </>
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation