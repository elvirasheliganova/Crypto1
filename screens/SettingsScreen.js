import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Ionicons, AntDesign} from '@expo/vector-icons';
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
const [showPassword, setShowPassword] = React.useState(false);
const [checked, setChecked] = React.useState(true);
const image = {uri: "https://reactjs.org/logo-og.png" };

  return (
    
    <View style={styles.container}>
          
          
    <View style={styles.headerContainer}>
      <Header title='Settings'/>
    </View>
      <View style={styles.settingsContainer}>
        <View style={styles.imageContainer}>
       
          <ImageBackground source={require('../assets/Ellipse 8.png')}     style={{
           
            
            
            alignItems: 'center', 
            justifyContent: 'center',
            
            
          }}>
            <View style={{width: 50, height:110, alignItems: 'center', justifyContent: 'center'}}>
            <AntDesign name="adduser" size={30} color="#fff"  />
            <Text style={{ marginTop: 10, fontSize: 14, color: '#fff', alignItems: 'center', justifyContent: 'center'}}>Upload</Text>
            <Text style={{ fontSize: 15, color: '#fff', alignItems: 'center', justifyContent: 'center'}}> Avatar</Text>
            </View>
          </ImageBackground>
          
        </View>

        {/*Form */}
        <View style={styles.formContainer}>

        {/*  Form line1*/}
          <View style={{ marginTop: 30}} >
              <Text style={{fontSize: 18, color: '#6B6C75'}}>Full name</Text>
            </View>
            <View style={{ height: 40, flexDirection: 'row',justifyContent: 'space-between',  alignItems: 'flex-start', marginTop: 25,  borderBottomColor: '#fff', borderBottomWidth: 2}} >
              <TextInput 
                  style={{fontSize: 22, color: '#fff'}}  
                  placeholder='Enter your name'
                  placeholderTextColor= '#fff'
                  secureTextEntry={!showPassword}
              />
           
            </View>

            {/*  Form line2*/}
          <View style={{ marginTop: 30}} >
              <Text style={{fontSize: 18, color: '#6B6C75'}}>Email Address</Text>
            </View>
            <View style={{ height: 40, flexDirection: 'row', justifyContent: 'space-between',  alignItems: 'flex-start', marginTop: 25,  borderBottomColor: checked ? '#fff' : '#0067FF' , borderBottomWidth: 2}} >
              <TextInput 
                  style={{fontSize: 22, color: '#fff'}}  
                  placeholder='Enter your email'
                  placeholderTextColor= '#fff'
                  
              />
              <TouchableOpacity
              onPress={() => setChecked(!checked)}
               >
                <Ionicons name={checked ? "square-outline" : "checkbox-outline"} size={24} color={checked ? "#fff" : "#0067FF"}  /> 
              </TouchableOpacity>
            </View>

            {/*  Form line3*/}
          <View style={{ marginTop: 30}} >
              <Text style={{fontSize: 18, color: '#6B6C75'}}>Password</Text>
            </View>
            <View style={{ height: 40, flexDirection: 'row',justifyContent: 'space-between',  alignItems: 'flex-start', marginTop: 25,  borderBottomColor: '#fff', borderBottomWidth: 2}} >
              <TextInput 
                  style={{fontSize: 22, color: '#fff'}}  
                  placeholder='Password'
                  placeholderTextColor= '#fff'
                  secureTextEntry={!showPassword}
              />
              <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)} >
                <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="#fff" /> 
              </TouchableOpacity>
            </View>
          </View>
         
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
  

  imageContainer: {
    marginTop: 50,
    height: 129,
    width: 129,
    borderRadius: 65,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#39393b',
    overflow: 'hidden',
      
      justifyContent: "center",
      alignItems: "center",
      
      textAlign: "center",
     
    
  },
  settingsContainer: {
    paddingHorizontal: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    width: '100%',
    alignItems: 'stretch'
  },
});
