import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeParamList } from '../types';
import HomeScreen from '../screens/Home/HomeScreen';
import TodoNotesScreen from '../screens/Home/TodoNotesScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { DEFAULT_ICON_COLOR } from '@expo/vector-icons/build/createIconSet';


const Stack = createStackNavigator<HomeParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
    initialRouteName='TodoNotes'
    screenOptions={({navigation}) => ({
      title: '',
      headerLeft: () => (
        <TouchableOpacity
        style={{
          marginLeft:15,
        }}
        onPress={() =>{
          navigation.toggleDrawer();
        }
        }
        >
         <Ionicons
         name={"menu"}
         size={32}
         color= {DEFAULT_ICON_COLOR}
         />
        </TouchableOpacity>
      )
    })}
    
    >
      <Stack.Screen name="Landing" component={HomeScreen} />
      
      <Stack.Screen name="TodoNotes" component={TodoNotesScreen} />

    </Stack.Navigator>
  );
}