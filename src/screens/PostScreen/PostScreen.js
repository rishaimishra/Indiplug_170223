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
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import Post from '../../assests/post.png';
import PostDetailScreen from '../PostDetailScreen/PostDetailScreen';

// import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../../context/AuthContext';

const PostScreen = () => {
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

  const [visibleDetails, setVisibleDetails] = useState(false);
  const onPress = () => {
    setVisibleDetails(!visibleDetails);
    setDisplay(!display);
    console.log(visibleDetails);
    console.log(display);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 25}}>
      {/* <CustomInput 
                placeholder="Your Email" 
                value={username} 
                setValue={setUsername} />
                <CustomInput  
                    placeholder="Password" 
                    value={password} 
                    setValue={setPassword} 
                    secureTextEntry /> */}
      {/* <CustomButton text="Sign In" onPress={onSignInpress} type="PRIMARY" /> */}
      <TouchableOpacity
        // style={styles.button}
        onPress={onPress}>
        {display ? (
          <>
            <Image source={Post} style={styles.PostStyle} />
          </>
        ) : (
          ''
        )}
      </TouchableOpacity>
      {visibleDetails ? (
        <TouchableOpacity
          // style={styles.button}
          onPress={onPress}>
          <PostDetailScreen />
        </TouchableOpacity>
      ) : (
        ''
      )}
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

export default PostScreen;
