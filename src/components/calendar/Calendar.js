import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import Post from '../../assests/images/post.png';

import colors from '../../constants/colors';
import images from '../../constants/images';
import Normalize from '../../helpers/Dimens';
// import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../../context/AuthContext';

function EventList() {
  const getCurrentDate = () => {
    const date = new Date();
    return moment(date).format('YYYY-MM-DD');
  };
  const [list, setList] = useState({
    [`${getCurrentDate()}`]: {
      customStyles: {
        container: {
          borderWidth: 1,
          borderColor: colors.primary,
          backgroundColor: colors.primary,
        },
        text: {
          color: colors.white,
          fontWeight: 'bold',
        },
      },
    },
    '2023-03-21': {
      customStyles: {
        container: {
          borderWidth: 1,
          borderColor: colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
        },
        text: {
          color: colors.dark,
          fontWeight: 'bold',
          backgroundColor: colors.bgInput,
          borderRadius: 100,
          height: Normalize(20),
          width: Normalize(20),
          textAlign: 'center',
        },
      },
    },
    '2023-03-20': {
      customStyles: {
        container: {
          borderWidth: 1,
          borderColor: colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
        },
        text: {
          color: colors.dark,
          fontWeight: 'bold',
          backgroundColor: colors.bgInput,
          borderRadius: 100,
          height: Normalize(20),
          width: Normalize(20),
          textAlign: 'center',
        },
      },
    },
  });

  useEffect(() => {
    console.log('currentDate', getCurrentDate());
  }, []);

  const [username, setUsername] = useState();
  const [display, setDisplay] = useState(true);
  const { height } = useWindowDimensions();
  // const navigation = useNavigation();
  // const {isLoading, login} = useContext(AuthContext);

  const onSignInpress = () => {
    // console.log(AsyncStorage.getItem());
    console.warn('sign in press');
    // login(username, password);

    // validate user
    // navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Calendar
        markingType="custom"
        markedDates={list}
        theme={{
          indicatorColor: '#afaf',
          textSectionTitleColor: colors.dark,
          monthTextColor: colors.dark,
          // todayTextColor: 'red',
          arrowColor: colors.dark,
        }}
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
      />
      <View style={[styles.row, styles.headingContainer]}>
        <Text style={styles.heading}>Today's Events</Text>
        <Pressable style={styles.addEventBtn}>
          <Text style={styles.addEventBtnTxt}>+ Add Event</Text>
        </Pressable>
      </View>
      <View style={[styles.row, styles.eventContainer]}>
        <Image source={images.banner} style={styles.banner} />
        <View style={styles.desc}>
          <Text style={styles.eventTime}>Feb 23, 8:30 AM - 9:30 AM</Text>
          <Text style={styles.eventName}>Songs Night Open Mic at Boston Hotel</Text>
          <View style={styles.row}>
            <Image source={images.locationGreen} style={styles.locationIcon} />
            <Text style={styles.location}>Indonesia</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingContainer: {
    justifyContent: 'space-between',
    marginVertical: Normalize(10),
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    paddingBottom: Normalize(10),
  },
  heading: {
    fontSize: Normalize(14),
    fontWeight: 'bold',
    color: colors.dark,
  },
  addEventBtn: {},
  addEventBtnTxt: {
    fontSize: Normalize(14),
    color: colors.primary,
  },
  eventContainer: {},
  banner: {
    height: Normalize(80),
    width: Normalize(80),
    borderRadius: Normalize(8),
    marginRight: Normalize(10),
  },
  desc: {},
  eventTime: {
    fontSize: Normalize(12),
    colors: colors.greyText2,
    marginBottom: Normalize(5),
  },
  eventName: {
    fontSize: Normalize(12),
    fontWeight: 'bold',
    colors: colors.dark,
    marginBottom: Normalize(15),
    width: '90%',
  },
  locationIcon: {
    marginRight: Normalize(5),
  },
  location: {
    fontSize: Normalize(12),
    colors: colors.greyText2,
  },
});

export default EventList;
