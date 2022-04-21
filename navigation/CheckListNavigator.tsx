import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CheckListParamList } from '../types';
import CheckListScreen from '../screens/Home/HomeScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { DEFAULT_ICON_COLOR } from '@expo/vector-icons/build/createIconSet';


const Stack = createStackNavigator<CheckListParamList>();

export default function CheckListNavigator() {
  return (
    <Stack.Navigator
    initialRouteName='TodoCheckList'
    screenOptions={({navigation}) => ({
      title: 'CheckList',
      headerLeft: () => (
        <TouchableOpacity
        style={{
          marginLeft:15
          
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
      <Stack.Screen name="TodoCheckList" component={CheckListScreen} />
    </Stack.Navigator>
  );
}