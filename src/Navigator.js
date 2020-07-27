import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';

const Tab = createBottomTabNavigator();
const LoginOrProfile = createStackNavigator();

function LoginOrProfileNavigator(){
  return (
    <LoginOrProfile.Navigator
      initialRouteName='Profile'
      headerMode='none'
    >
      <LoginOrProfile.Screen name="Profile" component={ Profile } />
      <LoginOrProfile.Screen name="Auth" component={ Login } />
    </LoginOrProfile.Navigator>
  )
}

export default function Navigator(){
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Feed'
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen
          name='Feed'
          component={ Feed }
          options={{tabBarIcon: ({ color }) => <Icon name="home" size={ 30 } color={ color } />}}
        />
        <Tab.Screen
          name='AddPhoto'
          component={ AddPhoto }
          options={{tabBarIcon: ({ color }) => <Icon name="camera" size={ 30 } color={ color } />}}
        />
        <Tab.Screen
          name='Profile'
          component={ LoginOrProfileNavigator }
          options={{tabBarIcon: ({ color }) => <Icon name="user" size={ 30 } color={ color } />}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
};