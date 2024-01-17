// part 1 import
// part 2 jsx
// part 3 logic
//part 4 style

import { FlatList,Text,StyleSheet,View, Image, TouchableOpacity, Alert} from "react-native";
// import React from 'react'
import { Card } from '@rneui/themed';

export default function MyFlatList({navigation}){
// use logic here like useState 
const studentList = [
    {name:'sumi', age:20,key:123, 
    image:'https://media.istockphoto.com/id/1389898237/photo/cute-girl-iconic-character-with-glasses-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=M6Tuv7Rr2YtKD6gi-g2B-fZdQ1bhC-WF8jdjQ-QRlkw='},
    {name:'laks', age:20,key:45,
    image:'https://media.istockphoto.com/id/1389898237/photo/cute-girl-iconic-character-with-glasses-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=M6Tuv7Rr2YtKD6gi-g2B-fZdQ1bhC-WF8jdjQ-QRlkw='},
    {name:'sumi', age:20,key:23, 
    image:'https://media.istockphoto.com/id/1389898237/photo/cute-girl-iconic-character-with-glasses-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=M6Tuv7Rr2YtKD6gi-g2B-fZdQ1bhC-WF8jdjQ-QRlkw='},
    {name:'laks', age:20,key:5,
    image:'https://media.istockphoto.com/id/1389898237/photo/cute-girl-iconic-character-with-glasses-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=M6Tuv7Rr2YtKD6gi-g2B-fZdQ1bhC-WF8jdjQ-QRlkw='}];

//    const myAlert = (item) =>{
//         Alert.alert('You Clicked ',''+ item.name,[
//             {text:'cancel',
//             onPress: () => {Alert.alert('canceled')}
//             },
//             {text:'ok',
//                 onPress: () => {Alert.alert('submitted')}
//             }
//         ]
//         )
//     }
//     // renderItem = ({item}) => {
//     //     return(
//     //          <Text>Name : {item.name} - Age : {item.age}</Text>      
//     //     )
//     // }
    renderItem = ({item}) => {
        return(
        <TouchableOpacity onPress={() => {
           navigation.navigate('Login',{it:item}) 
        }}>
        <Card > 
              <Text style = {styles.textFontStyle}>Name : {item.name}</Text> 
              <Image style = {styles.imageStyle} 
            src={item.image}></Image>
        </Card>
        </TouchableOpacity>
        )
             
    }

    return(
        <View style={styles.container}>

            <FlatList
            
                data = {studentList}
                keyExtractor = {std => std.key}
                renderItem = {renderItem}>
                </FlatList>
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

