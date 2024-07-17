/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react'

const Header = () => {
    
  return (
    <View style={styles.container}>
      
      <View style={styles.right}>
        <Image source={require('../assets/search.png')} style={styles.img}/>
        <Image source={require('../assets/mypic.png')} style={styles.img}/>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        margin:15
        

    },
    right:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        gap:15

    },

    
    
    img:{
        width:40,
        height:40,
        borderRadius:50,
  },
  });
  
// eslint-disable-next-line prettier/prettier
export default Header