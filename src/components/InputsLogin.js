
import React, {useState, useEffect} from 'react'
import {Text,StyleSheet,View, TextInput, Pressable, TouchableOpacity, Alert, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const InputsLogin = ()  =>  {
    const navigation = useNavigation(); 
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const data = {
        "password": password,
        "phone": phone
    }
    const handIngresar  = async() =>{
        console.log(data)
        return false
        try {
            const response = await fetch('https://appmobile.altcel2.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phone,
                    password,
                })
            }) 
    
            const {user_id, message, http_code} = await response.json()
           
            console.log(response.status)
            console.log(user_id)
            console.log(response.status)
            console.log(message)
            console.log(http_code)
            if (response.status == 200) {
                // statusLogin = 'login'
                // Navigations(statusLogin)
            }else if (response.status == 400 || response.status == 500) {
                // statusLogin = 'NoLogin'
                // Navigations(statusLogin)
            }
    
        }catch(error){
            console.log(error)
        }

        
    } 

    return ( 
        <View>
            <ScrollView>

                <Text style={styles.textSesion}>Iniciar Sesión</Text>
                <Text style={styles.subText}>Estamos contentos de verte.</Text>
                <View style={styles.campo}>
                    <TextInput style={styles.input} placeholderTextColor="#000" keyboardType='number-pad'
                                maxLength={10} placeholder='Usuario' value={phone} onChangeText={setPhone} />
                </View>

                <View style={styles.campo}>
                    <TextInput style={styles.input} secureTextEntry placeholderTextColor="#000" placeholder='Contraseña' value={password} onChangeText={setPassword}/>
                </View>
                {/* <Pressable style={styles.submitBtn} onPress={() => navigation.replace('Panel')}> */}
                <Pressable style={styles.submitBtn} onPress={handIngresar}>
                    <Text style={styles.submitBtnTexto}>Ingresar</Text>
                </Pressable>
                <View style={{flexDirection:'row', marginHorizontal: 20}}>
                    <Text style={styles.registrarse}>¿Aun no tienes cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                        <Text style={[styles.registrarse , styles.colorResgistrar]}> Registrate</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
     );
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#d0d3d4',
        padding: 10,
        borderRadius: 20,
        color: '#000',
        marginTop: 10,
        fontSize: 20
    },
    submitBtn:{
        backgroundColor: 'red',
        padding: 11,
        marginVertical: 20,
        marginHorizontal: 11,
        marginLeft: -2,
        borderRadius: 20
    },
    submitBtnTexto: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20
    },
    campo:{
        marginVertical:10,
        marginHorizontal: 10,
        marginLeft: -1
    },
    registrarse:{
        color: '#000',
        textAlign: 'center',
        fontSize: 17
    },
    textSesion:{
        color:'red',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold'
      },
      subText:{
        color:'#000',
        textAlign:'center',
        fontSize: 20
      },
      colorResgistrar:{
        color: 'red'
      },
})
export default InputsLogin;