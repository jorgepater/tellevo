import React from 'react';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './customDrawerContent/index';

const Drawer = createDrawerNavigator();

function MyTabs() {

  return (
    <Drawer.Navigator
        shifting={true}
        drawerContent={props => <CustomDrawerContent {...props}/>}
        screenOptions={{
            drawerStyle: {
              backgroundColor: '#c6cbef'
            },
        }}
    >
        <Drawer.Screen
            name="Home"
            component={HomeScreen}
        />

        <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
        />

        <Drawer.Screen
            name="Settings"
            component={SettingsScreen}
        />

    </Drawer.Navigator>
  );
}

export default MyTabs;
