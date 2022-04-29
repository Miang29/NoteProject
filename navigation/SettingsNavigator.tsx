import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingParamList } from '../types';
import SettingScreen from '../screens/Setting/SettingScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { DEFAULT_ICON_COLOR } from '@expo/vector-icons/build/createIconSet';


const Stack = createStackNavigator<SettingParamList>();

export default function SettingsNavigator() {
  return (
    <Stack.Navigator
    initialRouteName='AppSetting'
    screenOptions={({navigation}) => ({
      title: 'Settings',
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
      <Stack.Screen name="AppSetting" component={SettingScreen} />
    </Stack.Navigator>
  );
}