/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */


import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeNavigator from './HomeNavigator';
import SettingsNavigator from './SettingsNavigator';
import CheckListNavigator from './CheckListNavigator';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
 const Drawer = createDrawerNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Drawer.Navigator
    initialRouteName='Home'
    screenOptions={{
      headerShown: false
    }}
    >
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="CheckList" component={CheckListNavigator} />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
    </Drawer.Navigator>
  );
}

