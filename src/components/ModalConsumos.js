import React, { useEffect } from 'react'
import { Button, StyleSheet, View ,Text} from 'react-native';
import Progress  from 'react-native-progress'
import ProgressBar from 'react-native-progress/Bar'
// import CircularProgress from 'react-native-circular-progress-indicator';
import { globalStyle } from '../styles/'
import Icon from 'react-native-vector-icons/Ionicons'

export function ModalConsumo ({service, imei})  {
    
  return (
    <View style={styles.modalConsumos}>
        <View style={styles.contentConsumos}>
            <View style={styles.devicePlan}>
                <View style={{marginBottom:10}}>
                    <Text style={[styles.text, styles.textplanDevice]}>Dispositivo</Text>
                    <Text style={styles.text}>MIFI HOSPOT INTERNET CASA HOGAR</Text>
                </View>
                <View>
                    <Text style={[styles.text, styles.textplanDevice]}>Plan</Text>
                    <Text style={styles.text}>{imei}</Text>
                </View>
            </View>
            <View style={styles.bodyConsumos}>
                <View style={styles.infodateStatus}>
                    <View>
                        <Text style={styles.textBody}>Fecha de Activación</Text>
                        <Text style={styles.text}>10/07/2022</Text>
                    </View>
                    <View>
                        <Text style={styles.textBody}>Estado</Text>
                        <Text style={styles.text}>Activo</Text>
                    </View>
                    <View>
                        <Text style={styles.textBody}>Velocidad</Text>
                        <Text style={styles.text}>10 mbs</Text>
                    </View>

                </View>
                <View style={[styles.dataConsumo]}>
                    {
                        service == 'MOV' ?
                            <View>
                                <Text style={styles.textBody}>Consumo de datos: </Text>
                                <View style={{marginBottom:10}}>
                                    <Text style={styles.text}>Dtos:</Text>
                                    <ProgressBar  progress={0.5} width={320} height={10}/>
                                </View>
                                <View style={{marginBottom:10}}>
                                    <Text style={styles.text}>Llamadas:</Text>
                                    <ProgressBar  progress={0.5} width={320} height={10}/>
                                </View>
                                <View>
                                    <Text style={styles.text}>Mensajes:</Text>
                                    <ProgressBar  progress={0.5} width={320} height={10}/>
                                </View>
                            </View>
                        :
                        <View>
                            <Text style={styles.textBody}>Consumo de datos: </Text>
                            <ProgressBar  progress={0.5} width={320} height={10}/>
                            {/* <CircularProgress value={58} /> */}
                        </View>
                    }
                    <View style={styles.infodateStatus}>
                        <View>
                            <Text style={styles.textBody}>Contratado</Text>
                            <Text style={styles.text}>100 Gb</Text>
                        </View>
                        <View>
                            <Text style={styles.textBody}>Consumo</Text>
                            <Text style={styles.text}>3.99 Gb</Text>
                        </View>
                        <View>
                            <Text style={styles.textBody}>Restante </Text>
                            <Text style={styles.text}>10 mbs</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.btns}>
            <Icon.Button style={{backgroundColor:'red', height:40}} name='arrow-back-outline' onPress={() => setModalConsumo(false)}>Regresar</Icon.Button>
            <Icon.Button name='cart-outline' onPress={() => setModalConsumo(false)}>Recargar</Icon.Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    btns:{
        ...globalStyle.btnsModal
    },
    text:{
        ...globalStyle.text
    },
    contentConsumos:{
        borderRadius: 10,
        backgroundColor: '#F4F6F7',
        marginHorizontal: 20,
        width: '90%',
        height:'70%',
        marginTop: 80,
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    modalConsumos:{
        alignContent:'center',
        flex: 1,
        backgroundColor:'white'
    },
    devicePlan:{
        marginHorizontal: 20,
        marginTop:20,
        flex: 2,
        // backgroundColor: 'blue',
    },
    bodyConsumos:{
        marginHorizontal: 20,
        flex:7,
        // backgroundColor:'pink'
    },
    textplanDevice:{
        fontSize: 20,
        color: 'purple',
        fontWeight: 'bold'
    },
    infodateStatus:{
        flex: 1,
        flexDirection:'row',
        // backgroundColor: 'red',
        justifyContent:'space-between', 
        marginTop:10
    },
    dataConsumo: {
        flex: 5
    },
    textBody:{
        color:'purple',
        fontWeight: 'bold',
        fontSize: 16
    }
})

// export default ModalConsumo;