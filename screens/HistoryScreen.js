import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart';
import {FontAwesome, FontAwesome5} from '@expo/vector-icons';
import {
  useFonts,
  
  MontserratAlternates_400Regular,
  
  MontserratAlternates_700Bold,
 
} from '@expo-google-fonts/montserrat-alternates';
import Currency from '../components/Currency';
import Cashback from '../components/Cashback';
import Header from '../headers/Header';
import TextButton from '../components/TextButton';
import DayContainer from '../components/DayContainer';



export default function HistoryScreen() {
  let [fontsLoaded] = useFonts({
    MontserratAlternates_400Regular,
  
  MontserratAlternates_700Bold,
  });
  
  
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
         <Header title='History'/>
         <View style={styles.iconContainer}>
           <FontAwesome name="sliders" size={28} color="white" />
         </View>
      </View>
        <View style={styles.historyContainer}>
          <View style={styles.historyDateContainer}>
            <Text style={{
              fontSize:16, 
              color: '#6B6C75',
              marginBottom: 15,
              }}>Date</Text>
            <View style={{
              flexDirection: 'row',
             
              paddingBottom:20,
              justifyContent: 'space-between',
              borderBottomWidth: 2,
              borderBottomColor: '#808290'}}>
                <Text style={{fontSize:18, color: 'white'}}>February - March</Text>
                <FontAwesome5 name="calendar" size={20} color='#0067FF'/>

            </View>
          </View>
          <DayContainer day='yesterday'/>
          <DayContainer day='today'/>
          <DayContainer day='today'/>
        </View>
        
      
      <View >
        <ScrollView>
          
          
        </ScrollView>
      
     
      
      
       
      <StatusBar style="light"  />
      
    </View>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  

  chartContainer: {
    flex: 1,
  
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
   

headerContainer: {
   height: 80,
   

 },
iconContainer: {
  position: 'absolute',
  right: 20,
  top: 20,
  
},
historyContainer:{
  padding: 30,

},
historyDateContainer: {

  height: 60,
},
 currencyContainer: {
   
   width: '100%',
   paddingLeft: 25,
   marginVertical: 25,
   alignContent: 'flex-start'
 },
 currencyName: {
   
   fontSize: 14,
   color: '#6B6C75'
 },
 currencyValue: {
   
  fontSize: 44,
  color: '#fff'
},
  

  

  

  


  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    height: '20%',
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'lightblue'
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 50
  }

  
});
