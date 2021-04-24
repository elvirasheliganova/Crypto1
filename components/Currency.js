
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons';


const Currency = (props) => (

  <View style={styles.container}>
    <Text style={styles.currencyName}>{props.currencyName}</Text>
    <Text style={styles.currencyValue}>{props.currencyValue}</Text>
    
      <Ionicons  name={props.arrow}  size={22} color= {props.arrowColor} />
    
      
   
      
 
  
  </View>
);
  
    
  
  
  export default  Currency;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
    width: 110,
    backgroundColor: '#2A2D48',
    
    
  },
  currencyName: {
    
    color: '#808290',
    fontSize: 14,
  },
  currencyValue: {
    
    color: '#fff',
    fontSize: 14,
  },

  
}
)