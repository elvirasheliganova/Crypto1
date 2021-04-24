import React from 'react';
import {  DarkTheme, NavigationContainer } from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import HistoryScreen from '../screens/HistoryScreen';
import SignInScreen from '../screens/SignInScreen';
import ProfileStack from './ProfileStack';
import ProfileScreen from '../screens/ProfileScreen';
import ExchangesScreen from '../screens/ExchangesScreen';
import FirstScreen from '../screens/FirstScreen';
import TabBarIcon from '../components/TabBarIcon';
import { View, Text } from 'react-native';





const Tab = createBottomTabNavigator();


export default function AppNavigator(navigation) {
  return (
    <NavigationContainer theme={DarkTheme}
    >
  
    <Tab.Navigator 
    
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          height: 120,
          backgroundColor: '#2A2D48',
          shadowColor: "#000000",
          shadowOpacity: 0.5,
          shadowRadius: 30,
          shadowOffset: {
              height: 10,
              width: 10
          },
          elevation: 5,
        }
      }}
    > 

      
<Tab.Screen 
      name="Home" 
      component={FirstScreen}
      options={{
        tabBarIcon: ({focused}) => (
            <Ionicons 
            name="home-outline" 
            size={30}
            style={{color: focused ? '#50DFC2': 'gray'}}/>
        )
      }
      }/>

      <Tab.Screen 
      name="Exchanges" 
      component={ExchangesScreen}
      options={{
        tabBarIcon: ({focused}) => (
            <Ionicons 
            name="analytics-outline" 
            size={30}
            style={{color: focused ? '#50DFC2': 'gray'}}/>
        )
      }
      }/>
      
      <Tab.Screen 
      name="History" 
      component={HistoryScreen}
      options={{
        tabBarIcon: ({focused}) => (
            <Ionicons 
            name="time-outline" 
            size={30}
            style={{color: focused ? '#50DFC2': 'gray'}}/>
        )
      }
      }/>
      <Tab.Screen 
      name="SignIn" 
      component={SignInScreen}
      options={{
        tabBarIcon: ({focused}) => (
            <Ionicons 
            name="add-outline" 
            size={30}
            style={{color: focused ? '#50DFC2': 'gray'}}/>
        )
      }
      }/>
     
      <Tab.Screen 
      name="Profile" 
      component={ProfileStack}
      options={{
        tabBarIcon: ({focused}) => (
            <Ionicons 
            name="person-outline" 
            size={30}
            style={{
              color: focused ? '#50DFC2': 'gray'}}/>
        )
      }
      }
      
      />

    </Tab.Navigator>
  </NavigationContainer>
  );
};

