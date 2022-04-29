import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet,View,TouchableOpacity,Text } from 'react-native';
import * as React from 'react';

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  Plus: {
    height: 50,
    width: '15%',
    justifyContent: 'center',
    alignItems:'center',
    padding:1,
    borderRadius:80,
    backgroundColor:'#AF715D',
    marginTop:520,
    marginLeft:230,
  },
PlusSize: {
  color: 'white',
  fontSize: 30,
  textAlign:'center'
},
});
