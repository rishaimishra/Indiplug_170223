import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity
} from 'react-native';
import CustomInput from '../../components/customInput/CustomInput';
import TextInput from '../../components/customTextArea/CustomTextArea';
import CustomButton from '../../components/customButton/CustomButton';
import MediaButton from '../../components/MediaButton';
import { Button, Dialog, Portal } from 'react-native-paper';
import Camera from '../../assests/camera.png';
import Plug from '../../assests/plug.png';
import SelectDropdown from 'react-native-select-dropdown';
import arrow from '../../assests/icons/arrow.png';
import { useNavigation } from '@react-navigation/native';
import CalendarIcon from '../../assests/icons/calendar.png';

// import { AuthContext } from '../../context/AuthContext';

const RatingScreen = () => {
  const [event, setEvent] = useState();
  const [startDate, setStartDate] = useState();
  const [startDateTime, setStartDateTime] = useState();
  const [endDate, setEndDate] = useState();
  const [endDateTime, setEndDateTime] = useState();
  const [price, setPrice] = useState();
  const [location, setLocation] = useState();
  const [desc, setDesc] = useState();

  const navigation = useNavigation();

  const handlePress = () => {
    // some logic random the image
    navigation.navigate('addItems')
  }

  const { height } = useWindowDimensions();
  // const navigation = useNavigation();
  // const {isLoading, login} = useContext(AuthContext);

  const onSignInpress = () => {
    // console.log(AsyncStorage.getItem());
    console.warn('sign in press');
    // login(username, password);

    //validate user
    navigation.navigate('Home');
  };

  const onForgotPasswordpress = () => {
    // console.warn("forgot password press");
    // navigation.navigate("NewPassword")
  };
  const OnSignupCC = () => {
    // console.warn("signup press");
    // navigation.navigate("SignUp")
  };

  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <View
        style={{
          backgroundColor: '#fff',
          paddingTop: 25,
          paddingLeft: 10,
          paddingRight: 10,
        }}>

        <View style={styles.ratingArea}>
          <Text style={styles.rating}>Rating</Text>
          <Text style={styles.review}>⭐⭐⭐⭐ 4.7(21 reviews)</Text>
        </View>
        <View style={styles.priceArea}>
          <Text style={styles.amount}>$20</Text>
          <Text style={styles.amountTime}>Per Hour</Text>
        </View>
        <View style={styles.priceArea}>
          <Text style={styles.amount}>50</Text>
          <Text style={styles.amountTime}>Events Attend</Text>
        </View>
        <View style={styles.calendarArea}>
          <Image source={CalendarIcon} style={{ marginRight: 5, }} />
          <Text style={styles.amountTime}>View Artist Calender</Text>
        </View>

        <CustomInput
          placeholder="Event Title*"
          value={event}
          setValue={setEvent}
        />
        <View style={styles.inputRow}>
          <View style={styles.inputRowChild}>
            <CustomInput
              placeholder="Start Date*"
              value={startDate}
              setValue={setStartDate}
            />
          </View>
          <View style={styles.inputRowChild}>
            <CustomInput
              placeholder="Time*"
              value={startDateTime}
              setValue={setStartDateTime}
            />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.inputRowChild}>
            <CustomInput
              placeholder="End Date*"
              value={endDate}
              setValue={setEndDate}
            />
          </View>
          <View style={styles.inputRowChild}>
            <CustomInput
              placeholder="Time*"
              value={endDateTime}
              setValue={setEndDateTime}
            />
          </View>
        </View>
        <CustomInput
          placeholder="Enter Your Offered Price in USD*"
          value={price}
          setValue={setPrice}
        />
        <CustomInput
          placeholder="Add Venue (Location)*"
          value={location}
          setValue={setLocation}
        />
        <TextInput
          placeholder="Add Description*"
          value={desc}
          setValue={setDesc}
        />

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {/* <CustomButton text="Sign In" onPress={onSignInpress} type="SECONDARY" />
                    <CustomButton text="Sign In" onPress={onSignInpress} type="PRIMARY" /> */}
          <Button
            style={styles.footrButtonCancel}
            mode="contained"
            onPress={() => console.log('Pressed')}
            textColor="#444"
            buttonColor="#EBEBEB"
            labelStyle={{ fontSize: 20 }}>Cancel</Button>
          <Button
            style={styles.footrButtonSave}
            mode="contained"
            onPress={() => handlePress()}
            buttonColor="#008181"
            labelStyle={{ fontSize: 20 }}>Submit Request</Button>
        </View>
      </View>
      {/* 
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Actions>
            <Button onPress={() => console.log('Cancel')}>Cancel</Button>
            <Button onPress={() => console.log('Ok')}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal> */}


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  OrStyle: {
    fontSize: 14,
    color: '#929292',
    textAlign: 'center',
  },
  ratingArea: {
    width: '100%',
    backgroundColor: '#fffbf0',
    paddingTop: 10,
    paddingBottom: 30,
    borderRadius: 10,
    marginBottom: 5,
  },
  rating: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  review: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  priceArea: {
    flexDirection: 'row',
    backgroundColor: '#e5fcfc',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 5,
  },
  calendarArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  amountTime: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputRowChild: {
    width: '48%',
  },
  inputBoxRow: {
    width: '50%'
  },
  footrButtonCancel: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    width: '48%',
    marginTop: 20,
    fontSize: 50,
    // backgroundColor: '#aaa',
    // color: 'red '
  },
  footrButtonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    width: '48%',
    marginTop: 20,
  }

});

export default RatingScreen;
