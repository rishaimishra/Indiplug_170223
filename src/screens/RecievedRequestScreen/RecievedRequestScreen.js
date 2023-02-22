import { View, Text, Image, StyleSheet, ScrollView, } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import Profile from '../../assests/prof_image.png'
import Icon from 'react-native-vector-icons/FontAwesome';


const RecievedRequestScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        backgroundColor: '#fff',
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 10,
        paddingRight: 10,
      }}>
        <View style={styles.recievedCard}>
          <View style={styles.recievedCardHeader}>
            <View style={styles.recievedCardImg}>
              <Image source={Profile} style={styles.recievedImg} />
              <Text style={styles.recievedName}>Grame Smith</Text>
            </View>
            <Button style={styles.recievedMsgBtn}>Message</Button>
          </View>
          <View style={styles.recievedCardContent}>
            <Text style={styles.recievedHeading}>Baby Shower</Text>
            <Text style={styles.recievedTime}>Feb 23, 8:30 AM - 9:30 AM</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10 }}>
              <Icon name="rocket" size={30} color="#46ab4a" style={{ marginRight: 20 }} />
              <View>
                <Text style={styles.recievedTime}>Lara Djonggrang</Text>
                <Text style={styles.recievedTime}>Central Jakarta City, Jakarta Indonesia</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.recievedCard}>
          <View style={styles.recievedCardHeader}>
            <View style={styles.recievedCardImg}>
              <Image source={Profile} style={styles.recievedImg} />
              <Text style={styles.recievedName}>Grame Smith</Text>
            </View>
            <Button style={styles.recievedMsgBtn}>Message</Button>
          </View>
          <View style={styles.recievedCardContent}>
            <Text style={styles.recievedHeading}>Baby Shower</Text>
            <Text style={styles.recievedTime}>Feb 23, 8:30 AM - 9:30 AM</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10 }}>
              <Icon name="rocket" size={30} color="#46ab4a" style={{ marginRight: 20 }} />
              <View>
                <Text style={styles.recievedTime}>Lara Djonggrang</Text>
                <Text style={styles.recievedTime}>Central Jakarta City, Jakarta Indonesia</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  recievedCard: {
    backgroundColor: '#e5fcfc',
    borderColor: '#92bcbc',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20
  },
  recievedCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#92bcbc',
    borderBottomWidth: 1,
    padding: 20,
  },
  recievedCardImg: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  recievedImg: {
    width: 60,
    height: 60,
    borderRadius: 500,
    marginRight: 10
  },
  recievedName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  recievedMsgBtn: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#92bcbc',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
  },
  recievedCardContent: {
    padding: 20,
  },
  recievedHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  recievedTime: {
    fontSize: 16,
  },


});

export default RecievedRequestScreen