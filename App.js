import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

//Drawer
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();


import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function DrawerNavigator(){
  return(
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {backgroundColor: 'skyblue'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: 'skyblue'}
          }}
        >
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
          
        
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
