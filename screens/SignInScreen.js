import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, View,  TouchableOpacity } from 'react-native';

import {Ionicons} from '@expo/vector-icons';
import {
  useFonts,
  
  MontserratAlternates_400Regular,
  
  MontserratAlternates_700Bold,
 
} from '@expo-google-fonts/montserrat-alternates';

import Header from '../headers/Header';
import { TextInput } from 'react-native-gesture-handler';


export default function SignInScreen({navigation}) {
  let [fontsLoaded] = useFonts({
    MontserratAlternates_400Regular,
  
  MontserratAlternates_700Bold,
  });

const [showPassword, setShowPassword] = React.useState(false)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
  >
        <View style={styles.container}>
          
          
          <View style={styles.headerContainer}>
            <Header title=''/>
          </View>
          <View style={styles.signInContainer}>
          <View style={{height: 60, marginTop: 60}}>
            <Text style={{fontSize: 40, color: '#fff'}}>Sign in</Text>
          </View>
          <View style={{ marginTop: 25}} >
            <Text style={{fontSize: 18, color: '#6B6C75'}}>Email Address</Text>
          </View>
          <View style={{ height: 40, justifyContent: 'flex-start', marginTop: 25,  borderBottomColor: '#fff', borderBottomWidth: 2}} >
             <TextInput 
                style={{fontSize: 22, color: '#fff'}}  
                placeholder='Enter your email'
                placeholderTextColor= '#fff'
            />
          </View>

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
          <TouchableOpacity
           onPress={ () => navigation.navigate('Profile')}>
            <View style={{ 
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
              backgroundColor: '#0067FF', 
              marginTop: 60,
              borderRadius: 10}}>
              <Text style={{
              
                fontSize: 22, 
                color: '#fff', 
              
                }}>Sign in</Text>
            </View>
          </TouchableOpacity>
          
          </View>
          
          <StatusBar style="light"  />
          
        </View>
        </KeyboardAvoidingView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 30,
    fontFamily: 'MontserratAlternates_400Regular',
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  headerContainer: {
    height: 60,
  },
  signInContainer: {
    width: '100%',
    paddingLeft: 30,
    paddingRight: 20,

  },
  
});
