import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';

import {FontAwesome, FontAwesome5} from '@expo/vector-icons';
import {
  useFonts,
  
  MontserratAlternates_400Regular,
  
  MontserratAlternates_700Bold,
 
} from '@expo-google-fonts/montserrat-alternates';
import Cashback from './Cashback';
import HistoryCard from './HistoryCard';






export default function DayContainer(props) {
  let [fontsLoaded] = useFonts({
    MontserratAlternates_400Regular,
  
  MontserratAlternates_700Bold,
  });
  
  
  return (
    
     <View >
       <Text style={styles.dayTitle}>{props.day}</Text>
       <View style={styles.container}>
       <HistoryCard 
        image={require("../assets/kfc.png")} 
        brandName="KFC"
        brandCategory="Fastfood + 32%"/>
        <HistoryCard 
        image={require("../assets/steam.png")} 
        brandName="SteamPowered"
        brandCategory="Games"/>
        <HistoryCard 
        image={require("../assets/Bitcoin.png")} 
        brandName="Bitcoin"
        brandCategory="Crypto"/>
    
  </View>

     </View>
    
  );
  
}

const styles = StyleSheet.create({
  
dayTitle: {
  paddingTop: 50,
  fontSize: 24,
  color: '#fff',
},
  
   



 
  

  

  

  


  
  
});
