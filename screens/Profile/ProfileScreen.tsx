import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet,View } from 'react-native';
import * as React from 'react';

export default function ProfileScreen() {
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
    backgroundColor:"#DEB1B8"
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
});
