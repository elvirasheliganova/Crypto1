import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {CreateBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import ProfileScreen from './screens/ProfileScreen';
import FirstScreen from './screens/FirstScreen'

import Currency from './components/Currency';
import Cashback from './components/Cashback';
import AppNavigator from './navigator/AppNavigator';


export default function App() {
  return (
  <AppNavigator/>
  );
};