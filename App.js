import 'react-native-gesture-handler';
import React, { useEffect, useMemo, useState } from "react";
import {StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerMenu } from './src/navigations/Drawer';
import LoginNavigations from './src/navigations/LoginNavigation';
import AuthContext from './src/context/AuthContext'; 
import {setTokenApi} from "./src/api/token"


const App = () => {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    setAuth(null)
  }, [])
   
  const login = (user)=>{
    console.log('DESDE APP')
    console.log(user)
    // setTokenApi(user.jwt)
    setTokenApi('tokenBackend')
    setAuth({
      "userId": user.userId,
      "devices": user.devices
    })
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
