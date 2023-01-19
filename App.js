import 'react-native-gesture-handler';
import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerMenu } from './src/navigations/Drawer';
import LoginNavigations from './src/navigations/LoginNavigation';
// import { StackNavigation } from './src/navigations/Stack';
// import { StackNavigation } from './src/navigations/Stack';
// import { DrawerMenu } from './src/navigations/DrawerMenu';
// import { DrawerPersonalizado } from './src/navigations/DrawerPersonalizado';

const App = () => {

  return (
    <NavigationContainer>
      {/* <DrawerMenu/> */}
      <LoginNavigations/>
      {/* <DrawerPersonalizado/> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  },
  text: {
    color: '#000'
  }
});

export default App;
