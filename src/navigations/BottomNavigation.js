import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Panel from '../views/Panel';
import Recargas from '../views/Recargas';
import EstadoCuenta from '../views/EstadoCuenta';
import { Platform, StyleSheet, Text, TurboModuleRegistry } from 'react-native';
import {globalStyle} from '../styles';
import Icon  from 'react-native-vector-icons/Ionicons';

const BottomTabIos = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();



const MyTabs = () =>{
  return Platform.OS === 'ios'
          ? <TabsIos/>
          : <TabsIndroid/>
}


const TabsIndroid= () => {
  return (
    <Tab.Navigator sceneAnimationEnabled={true} barStyle={{backgroundColor: styles.color}} screenOptions={({route}) => ({
      tabBarIcon: ({}) =>{
        let iconName = ''
      switch (route.name) {
        case 'Panel':
          iconName = 'home-outline'         
          break;
        case 'Recargas':
          iconName = 'cash-outline'
          break;
        case 'EstadoCuenta':
          iconName = 'document-text-outline'
          break;
      }
      return <Icon name={iconName} size={15}  />
      }
    })}>
      <Tab.Screen name="Panel" component={Panel} />
      <Tab.Screen name="Recargas" component={Recargas} />
      <Tab.Screen name="EstadoCuenta" component={EstadoCuenta } />
    </Tab.Navigator>
  );
}



const TabsIos = () => {
  return (
    <BottomTabIos.Navigator sceneAnimationEnabled={true} barStyle={{backgroundColor: styles.color}} screenOptions={({route}) => ({
      tabBarIcon: ({}) =>{
        let iconName = ''
      switch (route.name) {
        case 'Panel':
          iconName = 'home-outline'         
          break;
        case 'Recargas':
          iconName = 'cash-outline'
          break;
        case 'EstadoCuenta':
          iconName = 'document-text-outline'
          break;
      }
      return <Icon name={iconName} size={15}  />
      }
    })}>
      <BottomTabIos.Screen name="Panel" component={Panel} />
      <BottomTabIos.Screen name="Recargas" component={Recargas} />
      <BottomTabIos.Screen name="EstadoCuenta" component={EstadoCuenta } />
    </BottomTabIos.Navigator>
  );
}

const styles = StyleSheet.create({
  color:{...globalStyle.colorPrimary}
})
export default MyTabs