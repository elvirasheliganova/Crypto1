import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Header( {title}) {
  const navigation = useNavigation();
  
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.icon}>
        <MaterialIcons name="arrow-back" size={30} color='#fff' onPress={() => navigation.navigate('Home')} />
      </TouchableOpacity>
      <View >
        <Text style={styles.headerText}>{title}</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  headerText: {
    color:'#fff',
    fontSize: 20,
  },
  icon: {
    position: 'absolute',
    left: 25,
    

  }

})