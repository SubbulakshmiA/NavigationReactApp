
import { View, FlatList,Text,StyleSheet ,TouchableOpacity,Alert} from "react-native";
import React, {useEffect, useState} from 'react';
import { Card } from '@rneui/themed'; // run 
import { SearchBar } from "@rneui/base";

export default function CityList(){
    const [cityResult, setCityResult] = useState([]);
    const [query, setQuery] = useState();
    // http://gd.geobytes.com/AutoCompleteCity?&q=tor
 
    useEffect(() => {
        fetch('http://gd.geobytes.com/AutoCompleteCity?&q='+query)
        .then(response => response.json()
        .then(data => {
            // console.log(data)
            setCityResult(data)
        })
        .catch(error => console.log('error '+error)))
        .catch(error => console.log('error '+error))})
  
        const myAlert = (item) =>{
        Alert.alert('You Clicked ',''+ item)
    }
    const list = ['item1','item2','item3']
    renderItem = ({item}) => {
        return(
        <TouchableOpacity onPress={() => {
            myAlert(item)
        }}>
        <Card > 
              <Text style = {{fontSize:24}}>{item}</Text> 
        </Card>
        </TouchableOpacity>
        )
             
    }
    return (
        <View style={styles.container}>
            <SearchBar
            value={query}
            placeholder="Enter your city"
            onChangeText={(v) => {
                setQuery(v)
            }}></SearchBar>
            <FlatList 
            data={cityResult}
            renderItem={renderItem}>

            </FlatList>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:50
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    searchbarStyle:{
        alignSelf:'stretch',
        marginTop:40
    }
  });


