import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailsScreen' 
import HistoryScreen from '../screens/HistoryScreen';

const Stack = createNativeStackNavigator();

function HistoryStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Histories" component={HistoryScreen}  />
        <Stack.Screen name="DetailsScreen" component={DetailScreen} />
      </Stack.Navigator>
  );
}

export default HistoryStack;