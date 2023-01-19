import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login';
import Register from '../views/Register';
const Stack = createStackNavigator();
const LoginNavigations = () => {

  return ( 

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Registro" component={Register} />
    </Stack.Navigator>
  );
};

export default LoginNavigations;