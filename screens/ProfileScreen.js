import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Ionicons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts,
  
  MontserratAlternates_400Regular,
  
  MontserratAlternates_700Bold,
 
} from '@expo-google-fonts/montserrat-alternates';
import Currency from '../components/Currency';
import Cashback from '../components/Cashback';





export default function ProfileScreen({navigation}) {
  let [fontsLoaded] = useFonts({
    MontserratAlternates_400Regular,
  
  MontserratAlternates_700Bold,
  });

 
  return (
    
    <View style={styles.container}>
     
      <View style={styles.titleBar}>
        
         <Image source={require('../assets/Avatar.png')} style={styles.avatar} />
         <View style={styles.title}>

        
          <Text style={styles.name}>John Dogger</Text>
          <Text style={styles.mail}>john.dogger@mail.com</Text>
        
         </View>
      </View>
      <View style={styles.moneyPanel}>
        <Currency 
          currencyName = 'USD' 
          currencyValue = '74,678' 
          arrow = "arrow-down-outline" 
          arrowColor='#DD5883'/>
        <Currency 
          currencyName = 'EUR' 
          currencyValue = '84,793' 
          arrow = "arrow-up-outline" 
          arrowColor='green'/>
        <Currency 
          currencyName = 'GBP' 
          currencyValue = '94,993' 
          arrow = "arrow-up-outline" 
          arrowColor='green'/>
      </View>
      <View style={styles.criptoMore}>
     
        <Text style={styles.criptoMoreTitle}> 
        Criptonite Premium
        </Text>
        <Text style={styles.criptoMoreSubtitle}> 
        Buy cripto premium and start saving your money today! 
        Start now, during the sale
        </Text>
        <LinearGradient 
        style={styles.buttonContainer}
             colors={['#A5F7C6', '#50DFC2']}
             start={{ x: 0, y: 0.5 }}
             end={{ x: 1, y: 0.5 }}>
          <TouchableOpacity >
         
            <Text
        style={styles.buttonText}
         
          
         onPress={ () => navigation.navigate('Info')}>
            Learn more
           </Text>
           
          </TouchableOpacity>
          </LinearGradient>
          
      </View>
      <View style={styles.cashback}>
        <View style={styles.cashbackPanel}>
          <Text style={styles.cashbackTitle}> 
          Cashback
          </Text>
          <TouchableOpacity>
            <Text style={styles.cashbackButton}> 
            View all
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
        <Cashback 
        image={require("../assets/kfc.png")} 
        brandName="KFC"
        brandCategory="Fastfood + 32%"/>
         <Cashback 
        image={require("../assets/steam.png")} 
        brandName="SteamPowerd"
        brandCategory="Games & soft + 32%"/>
         <Cashback 
        image={require("../assets/steam.png")} 
        brandName="Bitcoin"
        brandCategory="Crypto"/>
         <Cashback 
        image={require("../assets/steam.png")} 
        brandName="SteamPowerd"
        brandCategory="Games & soft + 32%"/>
         <Cashback 
        image={require("../assets/steam.png")} 
        brandName="Bitcoin"
        brandCategory="Crypto"/>
        </ScrollView>

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

  cashback: {
    height: 400,
    width: 390,
    marginTop: 35,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#2A2D48',
  },

  cashbackPanel: {
    flexDirection: 'row',
    width: 330,
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
   
  },

  cashbackTitle: {
    fontSize: 22,
    color: '#fff',
  },

  cashbackButton: {
    fontSize: 18,
    color: '#0067FF',
  },

  buttonContainer: {
    height: 60,
    marginTop: 20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 8,
    backgroundColor: '#50DFC2',
    
    
  },

  buttonText: {
    color: '#171826',
    fontSize: 17,
    fontWeight: 'bold',
  },

  criptoMore: {
    width: 390,
    height: 200,
    backgroundColor: '#2A2D48',
    borderColor: '#A5F7C6',
    borderWidth: 1,
    borderRadius: 15,
    padding: 25,
  },

  criptoMoreTitle: {
    
    color: '#fff',
    fontSize: 17,
  },

  criptoMoreSubtitle: {
    marginTop: 7,
    color: '#808290',
    fontSize: 15,
  },

  titleBarPanel: {
    width: 330,
    paddingLeft: 140,
    paddingBottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  panelText: {
fontSize: 20,
color: '#fff',
  },

  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 50,
    
    

  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'darkslateblue',
    
  },
  title: {
    flexDirection: 'column',
    paddingLeft: 25,
  },
  name: {
    fontSize: 32,
    fontWeight: '400',
    color: '#fff',
  },
  mail: {
    fontSize: 20,
    color: '#808290',
  },
  moneyPanel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    height: 50,
    width: 390,
    borderRadius: 8,
    padding: 5,
    margin: 35,
    
    
    backgroundColor: '#2A2D48',
  }
});
