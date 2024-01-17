import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, Image,TextInput, View } from 'react-native';

export default function LoginForm({route}) {

    const {it} = route.params;
    
  return (
    <View style={styles.container}>
            <Text style = {styles.textFontStyle}>Name : {it.name}</Text> 
           <Image style = {styles.imageStyle} 
            src={it.image}></Image> 
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
         marginTop:100,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
      },
      imageStyle:{
          alignSelf:'flex-end',
          width:200,
          height:200
      },
      textFontStyle:{
          fontSize:30
      }
});
