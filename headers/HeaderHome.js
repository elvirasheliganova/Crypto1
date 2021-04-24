import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function HeaderProfile({navigation}) {

  
  return (
    <View style={styles.header}>
      
      <View >
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <TouchableOpacity style={styles.icon}>
        <MaterialIcons name='settings' size={30} color='#fff' onPress={() => navigation.navigate('Settings')} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: 330,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  headerText: {
    color:'#fff',
    fontSize: 18,
  },
  icon: {
    position: 'absolute',
    right: 0,
    

  }

})