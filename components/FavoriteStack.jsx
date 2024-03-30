import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailsScreen' 
import FavoriteScreen from '../screens/FavoriteScreen';

const Stack = createNativeStackNavigator();

function FavoriteStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Favorites Restaurants" component={FavoriteScreen}  />
        <Stack.Screen name="DetailsScreen" component={DetailScreen} />
      </Stack.Navigator>
  );
}

export default FavoriteStack;