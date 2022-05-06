import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/Pages/Home/Home';
import RTL from './src/Pages/RTL/RTL';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RTL" component={RTL} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App