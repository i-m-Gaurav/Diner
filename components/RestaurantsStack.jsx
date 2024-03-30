import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailsScreen'
import Restaurants from "../components/Restaurants";

const Stack = createNativeStackNavigator();

function RestaurantsStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Restaurants" component={Restaurants}  />
        <Stack.Screen name="DetailsScreen" component={DetailScreen} />
      </Stack.Navigator>
  );
}

export default RestaurantsStack;