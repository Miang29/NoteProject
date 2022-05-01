import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CheckListParamList } from '../types';
import CheckListScreen from '../screens/CheckList/CheckListScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { DEFAULT_ICON_COLOR } from '@expo/vector-icons/build/createIconSet';
import { HomeScreen } from '../screens/Home';


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
        onPress={() =>
          navigation.navigate('HomeNavigator')}>
         <Ionicons
         name={"arrow-back-outline"}
         size={32}
         color= {DEFAULT_ICON_COLOR}
         />
        </TouchableOpacity>
      ),
        headerRight: () => (
          <TouchableOpacity
          style={{
            marginRight:15
          }}
          onPress={() =>{
            navigation.toggleDrawer();
          }
          }
          >
           <Ionicons
           name={"checkmark-outline"}
           size={25}
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