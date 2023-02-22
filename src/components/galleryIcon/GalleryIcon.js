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

const GalleryIcon = () => {
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
    <>
      {/* <Text>hhh</Text> */}
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          // backgroundColor: 'red',
          justifyContent: 'space-between',
          paddingLeft: 25,
          paddingRight: 25,
          marginHorizontal: 'auto',
        }}>
        <View>
          <Image source={Post} style={styles.PostStyle} />
        </View>
        <View>
          <Image source={Post} style={styles.PostStyle} />
        </View>
        <View>
          <Image source={Post} style={styles.PostStyle} />
        </View>

        {/* <Image source={Post} style={styles.PostStyle} />
        <Image source={Post} style={styles.PostStyle} /> */}
        {/* <Image source={Post} style={styles.PostStyle} /> */}
        {/* <Image source={Post} style={styles.PostStyle} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  PostStyle: {
    alignItem: 'left',
    marginBottom: 10,
  },
});

export default GalleryIcon;
