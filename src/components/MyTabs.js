import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {

  return (
    <Tab.Navigator
        shifting={true}
        // barStyle={{ backgroundColor: 'blue' }}
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarColor: '#61d27c',
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />

        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarColor: '#C147E9',
                tabBarLabel: 'Profile',
                tabBarIcon: ({color}) => (
                    <Feather name="user" color={color} size={24} />
                ),
            }}
        />

        <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
                tabBarColor: '#46C2CB',
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color }) => (
                    <Feather name="settings" color={color} size={24} />
                ),
            }}
        />

    </Tab.Navigator>
  );
}

export default MyTabs;
