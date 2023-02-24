import React, { useEffect, useState } from 'react'
import {Text, StyleSheet, View, Pressable, ScrollView } from 'react-native'
import { globalStyle } from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import Consumos from '../components/Consumos';


function EstadoCuenta() {
    const [Wifiactive, setWifiactive] = useState(true);    
    const [Callactive, setCallactive] = useState(false);    
    const [MSJactive, setMSJactive] = useState(false);    

    const handleClick = (type) => {        
        setWifiactive(false)
        setCallactive(false)
        setMSJactive(false)
        switch (type) {
            case 'wifi': 
                setWifiactive(!Wifiactive)
                break;
            case 'call':
                setCallactive(!Callactive)
                break;
            case 'msj': 
                setMSJactive(!MSJactive)
                break;        
            default:
                break;
        }
    };
    
    return ( 
        <View style={styles.container}>
            <View style={styles.seccionButtonsContainer}>
                <Pressable onPress={()=>handleClick('wifi')} style={[styles.seccionButtons, Wifiactive ? styles.seccionButtonsBorderActivate : styles.seccionButtonsBorderDisable]}>
                    <Icon style={[styles.IconButtons, Wifiactive ? styles.seccionButtonsActivate : styles.seccionButtonsDisable]} name='wifi'/>
                    <Text style={[styles.TextWhitIcon, Wifiactive ? styles.seccionButtonsActivate : styles.seccionButtonsDisable]}>Llamadas</Text>
                </Pressable >
                <Pressable onPress={()=>handleClick('call')} style={[styles.seccionButtons, Callactive ? styles.seccionButtonsBorderActivate : styles.seccionButtonsBorderDisable]}>
                    <Icon style={[styles.IconButtons, Callactive ? styles.seccionButtonsActivate : styles.seccionButtonsDisable]}  name='phone'/>
                    <Text style={[styles.TextWhitIcon, Callactive ? styles.seccionButtonsActivate : styles.seccionButtonsDisable]}>Llamadas</Text>
                </Pressable>
                <Pressable onPress={()=>handleClick('msj')} style={[styles.seccionButtons, MSJactive ? styles.seccionButtonsBorderActivate : styles.seccionButtonsBorderDisable]}>
                    <Icon style={[styles.IconButtons, MSJactive ? styles.seccionButtonsActivate : styles.seccionButtonsDisable]}  name='commenting-o'/>
                    <Text style={[styles.TextWhitIcon, MSJactive ? styles.seccionButtonsActivate : styles.seccionButtonsDisable]}>Mensaje</Text>
                </Pressable>
            </View>
            <ScrollView style={styles.containerConsumos}>
                <Text style={styles.textDateReference}>Periodo: 26 Dic al 25 Ene</Text>

                <View style={styles.contentOptions}>
                    {/* <View>
                        <Icon style={[styles.IconWhitText, styles.IconButtons, styles.contentOptionsText]}  name='envelope-o'/>
                        <Text style={[styles.TextWhitIcon, styles.contentOptionsIcons]}>Enviar por correo</Text>
                    </View> */}
                    <View>
                        <Icon style={[styles.IconWhitText, styles.IconButtons, styles.contentOptionsText]} name='download'/>
                        <Text style={[styles.TextWhitIcon, styles.contentOptionsIcons]}>Descargar PDF</Text>
                    </View>
                </View>
                <View style={styles.contentOptions}>
                    <Consumos/>
                </View>
            </ScrollView>
            
        </View>
    );

    
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f2f2f2',        
    },
    TextWhitIcon:{        
        alignItems:'center',
        fontSize:15,
        textAlign:'center'
    },
    IconWhitText:{
        alignSelf: 'center',
        alignItems:'center',
        fontSize:40
    },
    IconButtons:{        
        fontSize:30,

    },
    seccionButtonsActivate:{
        color:'blue',
    },
    seccionButtonsBorderActivate:{
        borderBottomColor: 'blue',
        paddingBottom: 3,
        borderBottomWidth: 1
    },
    seccionButtonsBorderDisable:{

    },
    seccionButtonsDisable:{
        color:'#8C8C8C'
    },
    seccionButtonsContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:30
    },

    seccionButtons:{
        marginHorizontal:20,    
        justifyItems:'center',
        alignItems:'center'
    },
    containerConsumos:{
        backgroundColor:'white',
        flex:1,
        marginHorizontal:15,
        marginTop:3,        
    },
    contentOptions:{
        color:'black',    
        flexDirection:'row',
        justifyContent:'space-evenly',        
        padding: 10,
        borderColor: '#8C8C8C',        
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical:10       
    },
    contentOptionsIcons:{
        color:'black', 
    },
    contentOptionsText:{
        color:'black', 
    },
    textDateReference:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',        
        fontSize:17,
        marginVertical:15
    },
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
        color: 'black'
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
export default EstadoCuenta;