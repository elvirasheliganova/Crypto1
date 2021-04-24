
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';


const Cashback = (props) => (

  <View style={styles.container}>
    <View style={styles.cashbackCard}>
      <Image 
      source={props.image} 
      style={styles.cashbackLogo}/>
      <View style={styles.cashbackText}>
        <Text style={styles.brandName}>{props.brandName}</Text>
        <Text style={styles.brandCategory}>{props.brandCategory}</Text>
      </View>
    </View>
    <View style={styles.iconContainer} >
    <Entypo name="check" size={20} color="#A5F7C6" />
    </View>
    
  </View>
);
  
  export default  Cashback;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width: 330,
    backgroundColor: '#2A2D48',
    marginBottom: 30,
  },
  
  cashbackCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    
  },
  cashbackLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  cashbackText: {
    justifyContent: 'center',
    width: 150,
    height: 50,
  },
  
  brandName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  brandCategory: {
    fontSize: 18,
    color: '#888CAC',
    
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#474B73',
    width: 30,
    height: 30,
    borderRadius: 15,
  }
}
)