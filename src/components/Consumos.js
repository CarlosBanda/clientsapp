import React, {useState, useEffect} from 'react'
import {Text, StyleSheet, View, Image, Button, Pressable, Modal} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { consultCdrs } from "../api/consultCdrs"


function Consumos({type, phone, dateStart, dateEnd}) {

  consultCdrs(type, phone, dateStart, dateEnd).then((res) => {
    console.log(res)
  })
  .catch((e) => {
    console.log(e.message)
  })

  // let  a = [];
  // {for (let index = 0; index < type; index++) {
  //   a.push(
  //     <View style={styles.contentOptions}>
  //       <View style={[styles.consumosContainer]}>
  //         <View style={[styles.consumosHeader]}>
  //           <View style={[styles.consumosHeaderContainers]}>
  //             <Icon style={[styles.consumosIcon]} name='calendar'/>
  //             <Text style={[styles.consumosText]}>12 Ene</Text>
  //           </View>
  //           <View style={[styles.consumosHeaderContainers]}>
  //             <Text style={[styles.consumosText]}>
  //               {type}
  //             </Text>
  //             <Icon style={[styles.consumosIcon, styles.consumosIconActive]} name='arrow-down'/>
  //           </View>
  //         </View>
  //       </View>
  //     </View>
  //   )
  // }}

  return (
    <View>
      
    </View>
  );

}

const styles = StyleSheet.create({
  
  contentOptions:{
    flex: 1,    
    color:'black',    
    justifyContent: 'space-evenly', 
    padding: 10,
    borderColor: '#8C8C8C',        
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical:10,
    paddingHorizontal:20,
  },
  consumosHeader:{
    flexDirection:'row',
    justifyContent:'space-between',    
  },
  consumosHeaderContainers:{
    flexDirection:'row'
  },
  consumosIconActive:{
    color:'blue'
  }, 
  consumosText:{
    color:'black',
    fontSize:17,
    fontWeight:'bold',
    marginHorizontal:10
  },
  consumosIcon:{
    color:'black',
    fontSize:22
  },
})

export default Consumos