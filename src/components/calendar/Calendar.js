import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

import colors from '../../constants/colors';
import images from '../../constants/images';
import Normalize from '../../helpers/Dimens';

import AddEventModal from '../addEventModal';

function EventList() {
  const navigation = useNavigation();
  const getCurrentDate = () => {
    const date = new Date();
    return moment(date).format('YYYY-MM-DD');
  };
  const [list] = useState({
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

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log('currentDate', getCurrentDate());
  }, []);

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
        <Text style={styles.heading}>Todays Events</Text>
        <Pressable style={styles.addEventBtn} onPress={() => setShowModal(!showModal)}>
          <Text style={styles.addEventBtnTxt}>+ Add Event</Text>
        </Pressable>
        <AddEventModal modalShow={showModal} handleUpload={() => setShowModal(!showModal)} />
      </View>
      <TouchableOpacity
        style={[styles.row, styles.eventContainer]}
        onPress={() => navigation.navigate('EventDetails')}
      >
        <Image source={images.banner} style={styles.banner} />
        <View style={styles.desc}>
          <Text style={styles.eventTime}>Feb 23, 8:30 AM - 9:30 AM</Text>
          <Text style={styles.eventName}>Songs Night Open Mic at Boston Hotel</Text>
          <View style={styles.row}>
            <Image source={images.locationGreen} style={styles.locationIcon} />
            <Text style={styles.location}>Indonesia</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    color: colors.greyText2,
    marginBottom: Normalize(5),
  },
  eventName: {
    fontSize: Normalize(12),
    fontWeight: 'bold',
    color: colors.greyText2,
    marginBottom: Normalize(15),
    width: '90%',
  },
  locationIcon: {
    marginRight: Normalize(5),
  },
  location: {
    fontSize: Normalize(12),
    color: colors.greyText2,
  },
});

export default EventList;
