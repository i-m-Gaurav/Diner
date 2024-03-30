import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailsScreen' 

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="DetailsScreen" component={DetailScreen} />
      </Stack.Navigator>
  );
}

export default HomeStack;