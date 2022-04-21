import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileParamList } from '../types';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { DEFAULT_ICON_COLOR } from '@expo/vector-icons/build/createIconSet';


const Stack = createStackNavigator<ProfileParamList>();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator
    initialRouteName='ProfileList'
    screenOptions={({navigation}) => ({
      title: 'Profile',
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
      <Stack.Screen name="ProfileList" component={ProfileScreen} />
    </Stack.Navigator>
  );
}