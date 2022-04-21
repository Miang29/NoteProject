import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { HomeParamList } from '../types';

const Stack = createStackNavigator<HomeParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={HomeScreen} />
    </Stack.Navigator>
  );
}