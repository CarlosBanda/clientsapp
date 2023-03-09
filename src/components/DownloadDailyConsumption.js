import React, {useState, useEffect} from 'react'
import {Text, StyleSheet, Pressable, Alert, PermissionsAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { consultCdrs } from "../api/consultCdrs"
import { PdfConsumption } from "../api/PdfConsumption"
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';

function DownloadDailyConsumption({type, phone, dateStart, dateEnd}) {
    const [Consumos, setConsumos] = useState([]);  

    useEffect(() => {
        searchConsumo()
    }, [])

    function searchConsumo() {
        consultCdrs(type, phone, dateStart, dateEnd).then((res) => {
            setConsumos(res)
        })
        .catch((e) => {
            console.log(e.message)
        })
    }
 
    const createPdf = async () => {     
        await searchConsumo()
        const pdfHtml = await PdfConsumption(Consumos)
        const options = {
            html: pdfHtml,
            fileName: 'Consumos',
            directory: 'Documents'
        }

        let fileDownload = await RNHTMLtoPDF.convert(options)
        Alert.alert('Guardado exitoso!!', 'Ubicacion:' + fileDownload.filePath, [
            { text: 'Cerrar', style: 'cancel' },
            { text: 'Abrir!', onPress: () => openFile(fileDownload.filePath) }
        ], { cancelable: true });
    }


    const askPermission = () => {
        async function requestExternalWritePermission() {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'Permisos para descargas dentro del la app',
                message:
                  'Para descargar este archivo necesitas conder permiso.',
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                createPdf();
            } else {
              alert('WRITE_EXTERNAL_STORAGE permission denied');
            }
          } catch (err) {
            alert('Write permission err', err);
            console.warn(err);
          }
        }
        if (Platform.OS === 'android') {
          requestExternalWritePermission();
        } else {
            createPdf();
        }
    }

    const openFile = (filepath) => {
        const path = filepath;// absolute-path-to-my-local-file.
        FileViewer.open(path)
        .then(() => {
            console.log('true');
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <Pressable onPress={()=>askPermission()}>
            <Icon style={[styles.IconWhitText, styles.IconButtons, styles.contentOptionsText]} name='download'/>
            <Text style={[styles.TextWhitIcon, styles.contentOptionsIcons]}>Descargar PDF</Text>
        </Pressable>
    );

}

const styles = StyleSheet.create({
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
    contentOptionsText:{
        color:'black', 
    },
    contentOptionsIcons:{
        color:'black', 
    },
})

export default DownloadDailyConsumption