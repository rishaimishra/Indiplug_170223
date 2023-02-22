import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import Post from '../../assests/post.png';

// import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../../context/AuthContext';

const CalendarIcon = () => {
  const [username, setUsername] = useState();
  const [display, setDisplay] = useState(true);
  const {height} = useWindowDimensions();
  // const navigation = useNavigation();
  // const {isLoading, login} = useContext(AuthContext);

  const onSignInpress = () => {
    // console.log(AsyncStorage.getItem());
    console.warn('sign in press');
    // login(username, password);

    //validate user
    // navigation.navigate('Home');
  };


  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 25}}>
        <Text>Calendar icon</Text>
            <Image source={Post} style={styles.PostStyle} />
         
        
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  PostStyle: {
    alignItem: 'left',
  },
});

export default CalendarIcon;
