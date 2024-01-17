import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button, View } from 'react-native';
import MyFlatList from './Components/MyFlatList';
import CityList from './Components/CityList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from './Components/LoginForm';

export default function App() {

const stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>

      <NavigationContainer>
        <stack.Navigator>
        <stack.Screen name='City' component={CityList}
            // options={{
            //   headerRight: () => (
            //     <Button
            //       onPress={() => navigation.navigate('Name')}
            //       title="Info"
            //       color="#f00"
            //     />
            //   ),
            // }}
             options={({navigation, route}) => ({
              headerRight: () =>(
                <Button title='Go to Name List'
                color='#f00'
                onPress={() => navigation.navigate('Name')}/>
              )
             })}
             
             />
        <stack.Screen name='Name' component={MyFlatList}/>
        <stack.Screen name='Login' component={LoginForm}/>
      </stack.Navigator>
      </NavigationContainer>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
