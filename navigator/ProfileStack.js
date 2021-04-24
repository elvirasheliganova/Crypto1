import React from 'react';
import { StackRouter } from 'react-navigation';
import { createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HeaderProfile from '../headers/HeaderHome';
import SignInScreen from '../screens/SignInScreen';

const Stack = createStackNavigator();

export default function ProfileStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options ={ ({navigation}) => {
        return {
          headerTitle: () => <HeaderProfile navigation={navigation}/>,
          headerStyle: {
            backgroundColor: 'black',
          } }}} />
      <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options = {{
        headerStyle: {
        backgroundColor: 'black',
        
      },
        headerShown: false,
        
      }} />
      <Stack.Screen
      name="SignIn"
      component={SignInScreen}/>


      

    </Stack.Navigator>
  );
};