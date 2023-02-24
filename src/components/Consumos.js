import React, {useState, useEffect} from 'react'
import {Text, StyleSheet, View, Image, Button, Pressable, Modal} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


function Consumos() {
  return (
    <View style={[styles.consumosContainer]}>
      <View style={[styles.consumosHeader]}>
        <View style={[styles.consumosHeaderContainers]}>
          <Icon style={[styles.consumosIcon]} name='calendar'/>
          <Text style={[styles.consumosText]}>13 Ene</Text>
        </View>
        <View style={[styles.consumosHeaderContainers]}>
          <Text style={[styles.consumosText]}>10 KB</Text>
          <Icon style={[styles.consumosIcon, styles.consumosIconActive]} name='arrow-down'/>
        </View>
      </View>
      <View style={[styles.consumosBody]}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  consumosContainer:{
    flex: 1    
  },
  consumosHeader:{
    flexDirection:'row',
    justifyContent:'space-between'    
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