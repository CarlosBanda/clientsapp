import React, { useEffect, useState } from 'react'
import {Text,StyleSheet,View, Alert, TouchableOpacity} from 'react-native'
import { globalStyle } from '../styles/';
import useAuth from '../hooks/useAuth';
import Icon  from 'react-native-vector-icons/Ionicons';

function Profile() {
    const {logout} = useAuth();

    const logoutConfirm = () =>{
        Alert.alert(
            "Cerrar Sesión",
            "¿Desea cerrar su sesión?",
            [
                {
                    text: "No"
                },
                {
                    text: 'Si',
                    onPress: logout
                }
            ],
            {cancelable: false}
        )
    }
   
    return ( 
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={logoutConfirm}>
                    <Text style={styles.text}>Cerrar Sesión <Icon color={'red'} name={'exit-outline'} size={20}/></Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        borderColor: '#d5d9dc',
        borderWidth: 2,
        color: '#000',
        marginTop: 10,
        marginBottom: 30,
        fontSize: 15,
        marginHorizontal: 10
    },
    textTitle:{
        marginTop: 20,
        fontSize: 15,
        marginHorizontal: 80,
        fontWeight: 'bold'
    },
    textNum:{
        marginLeft: 20,
        marginTop: 20
    },
    text:{
        color: 'red',
        fontSize: 20
    },
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    body:{
        flex: 8,
        width:'100%',
        marginVertical: 100,
        height: 400,
        alignContent: 'center',
        // backgroundColor:'red'
    },
    addDevice:{
        flex:1,
        marginHorizontal:35,
        alignItems:'flex-start',
        marginBottom: -50,
        marginTop: 10,
    },
    btnAddDevice:{
        padding: 5,
        color:'black',
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        borderColor: '#F5232D',
        marginTop: 10
    },
    modalAdd:{
        flex: 1,
        backgroundColor:'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyModal:{
        borderRadius: 10,
        width: 300,
        height: 250,
        backgroundColor: 'white',
        // alignItems: 'center',
    },
    btns:{
        ...globalStyle.btnsModal
    }
})
export default Profile;