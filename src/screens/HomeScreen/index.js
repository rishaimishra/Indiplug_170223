import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CustomButton from '../../components/customButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import ProductItem from '../../components/ProductItem'
import axios from "axios";
import { BASE_URL } from "../../config";



const HomeScreen = () => {
  // const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  const headers = {
    Authorization: `Bearer ${userInfo.token}`
  };
  const getProductData = () => {

    axios.get(`${BASE_URL}/products-fetch`,
        {
            headers
        }
        ).then(res => {
            let realData = res.data;
            setMyData(realData);
            // setIsLoaded(false);
            console.log(112111);
            console.log(realData);
        }).catch(e => {
            console.warn(`logout error ${e}`);
        });
  }


  useEffect(() => getProductData(), []);
  // const navigation = useNavigation();

         

  const OnResendPress = () =>{
    // console.warn("resend press");
    logout(userInfo)
    // navigation.navigate('ResetPassword')
}
  return (
    <View style={styles.page}>
      {/* <Spinner visible={isLoaded} /> */}
      {/* <Spinner visible={isLoading} /> */}
      {/* <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, sweet home welcome {userInfo.data.name}</Text> */}
      <CustomButton 
                    text="Logout" 
                    onPress={OnResendPress} 
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                     />

         <ProductItem data={myData} />
         <ProductItem />
         <ProductItem />
         <ProductItem />
    </View>
  )
}

const styles = StyleSheet.create({
  page:{
    padding: 10
  },
})
export default HomeScreen