import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Ionicons} from '@expo/vector-icons';
import {
  useFonts,
  
  MontserratAlternates_400Regular,
  
  MontserratAlternates_700Bold,
 
} from '@expo-google-fonts/montserrat-alternates';
import Header from '../headers/Header';



export default function SettingsScreen() {
  let [fontsLoaded] = useFonts({
    MontserratAlternates_400Regular,
  
  MontserratAlternates_700Bold,
  });

 
  return (
    
    <View style={styles.container}>
          
          
    <View style={styles.headerContainer}>
      <Header title='Settings'/>
    </View>
      <View style={styles.settingsContainer}>
       
         <ImageBackground source={require('../assets/Ellipse 8.png')} style={styles.avatar}/>
        
         
      </View>
      
     
      <StatusBar style="light"  />
      
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    fontFamily: 'MontserratAlternates_400Regular',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  headerContainer: {
    height: 60,
    width: '100%'
  },
  avatar: {
    marginTop: 15,
    height: 129,
    width: 129,
    borderRadius: 65,
    borderColor: '#fff',
    borderWidth: 1,
    
    
    

  },
  settingsContainer: {
    paddingHorizontal: 30,
  }
});
