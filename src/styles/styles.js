import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight
    },
    headerContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:"space-around",
      backgroundColor:"white",
      padding:10,
      elevation:10,
    },
    searchBarStyle:{
      borderColor:'grey',
      borderWidth:1,
      width:"80%"
    },
    listContainerStyle:{
      flexDirection:"row",
      alignItems:"center",
      margin:10,
      padding:10,
      backgroundColor:"blue",
      elevation:10,
    },
    listTextStyle:{
      color:'white',
      fontSize:20,
      marginLeft:10
    },
    loadingStyle:{
      margin:10
    }
})

export default styles