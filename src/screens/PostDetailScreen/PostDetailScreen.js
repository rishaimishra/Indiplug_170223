import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {Button} from 'react-native-paper';
import PostDetail from '../../assests/postBanner.png';
import Comment from '../../assests/comment.png';
import Heart from '../../assests/heart.png';
import Retweet from '../../assests/retweet.png';
import Pin from '../../assests/pin.png';

// import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../../context/AuthContext';

const PostDetailScreen = () => {
  const [username, setUsername] = useState();
  const {height} = useWindowDimensions();
  // const navigation = useNavigation();
  // const {isLoading, login} = useContext(AuthContext);

  return (
    <ScrollView>
      <View style={{backgroundColor: '#fff', paddingTop: 25}}>
        <View>
          <View>
            <Text style={styles.profileTitle}>
              Galactic George &nbsp;
              <Text style={styles.profileTime}>12 min ago {'\n'}</Text>
            </Text>
            <Text style={styles.profileState}>L.A. United States</Text>
          </View>
        </View>
        <Text style={styles.profileCaption}>"Dimensioanl space" out now!</Text>
        <View style={styles.postImageMain}>
          <Image source={PostDetail} style={styles.postImage} />
          <Text style={styles.postUnpin}>Unpin</Text>
        </View>
        <View style={styles.postReaction}>
          <Image source={Heart} />

          <Text style={styles.postReact}>7.3K</Text>
          <Image source={Comment} />

          <Text style={styles.postReact}>122</Text>
          <Image source={Retweet} />

          <Text style={styles.postReact}>1.2K</Text>
        </View>
        <View>
          <View>
            <Text style={styles.profileTitle}>
              Galactic George &nbsp;
              <Text style={styles.profileTime}>12 min ago {'\n'}</Text>
            </Text>
            <Text style={styles.profileState}>L.A. United States</Text>
          </View>
        </View>
        <Text style={styles.profileCaption}>"Dimensioanl space" out now!</Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={Pin} style={styles.pinStyle} />
          <Text style={styles.postBelowUnpin}>Unpin</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  PostStyle: {
    // alignItem: 'left',
  },
  profileName: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  profileTime: {
    fontSize: 14,
    paddingLeft: 10,
    fontWeight: '400',
    color: '#888',
  },
  profileState: {
    fontSize: 14,
    color: '#888',
    marginTop: -10,
  },
  profileCaption: {
    fontSize: 18,
    marginBottom: 15,
    color: '#000',
  },
  postImageMain: {
    position: 'relative',
  },
  postImage: {},
  postUnpin: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'teal',
    color: '#fff',
    fontSize: 20,
    fontWeight: '300',
    padding: 3,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  postBelowUnpin: {
    backgroundColor: 'teal',
    color: '#fff',
    fontSize: 20,
    fontWeight: '300',
    padding: 3,
    paddingHorizontal: 12,
    borderRadius: 20,
    width: 100,
    marginLeft: 'auto',
    textAlign: 'center',
  },
  postReaction: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
    width: '70%',
  },
  postReact: {
    fontSize: 18,
  },
  pinStyle: {
    fontSize: 18,
    position: 'relative',
    marginLeft: '10%'
  },
});

export default PostDetailScreen;
