import 'react-native-gesture-handler';
import React, { useEffect, useMemo, useState } from "react";
import {Alert, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerMenu } from './src/navigations/Drawer';
import LoginNavigations from './src/navigations/LoginNavigation';
import AuthContext from './src/context/AuthContext'; 
import {setTokenApi, getTokenApi} from "./src/api/token"


const App = () => {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    ( async () =>{
      const token = await getTokenApi()
      console.log(token)
      if (token) {
        setAuth({
          token
        })
      }else{
        setAuth(null)
      }
    })()
  }, [])
   
  const login = (user)=>{
    console.log('LOGIN APP')
    const http_code = user.http_code

    if (http_code == '200') {
      setTokenApi(user.jwt)
      setAuth({
        token: user.jwt,
        userId: user.userId,
        devices: user.devices
      })
    }else{
      Alert.alert('Error',
      'Número o Contraseña incorrecta.',)
    }
    console.log(http_code)
    
  }
  const authData = useMemo(
    () =>({
      auth,
      login,
      logout: () => null,
    }),[auth]
  );

  if(auth === undefined) return null;
  return (
    <AuthContext.Provider value={authData}>
      <NavigationContainer>
        {/*  */}
        {auth ? <DrawerMenu/> : <LoginNavigations/>}
        
        {/* <DrawerPersonalizado/> */}
      </NavigationContainer>
    </AuthContext.Provider>
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
