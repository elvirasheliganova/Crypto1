
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';


const HistoryCard = (props) => (

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
    <Text style={{fontSize: 20, color: '#0067FF'}}>+3568%</Text>
    </View>
    
  </View>
);
  
  export default  HistoryCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    
    marginTop: 30,
    
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
    
    
    borderRadius: 15,
  }
}
)