import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import FoodListCard from '../components/FoodListCard';

const HistoryScreen = ({navigation}) => {
    // Sample food items data
    const Hotels = [
        { id: 1, name: 'pizza', price : '10/-' },
        { id: 2, name: 'biryani', price : '10/-' },
        { id: 3, name: 'butter chicken', price : '10/-' },
        { id: 4, name: 'panner chilli', price : '10/-' },
        { id: 5, name: 'egg roll', price : '10/-' },
        { id: 6, name: 'fried rice', price : '10/-' },
        { id: 7, name: 'shezwan rice', price : '10/-' },
    ];
    return (
      <ScrollView>
      
      {Hotels.map((hotel) => (
        <FoodListCard key={hotel.id} name = {hotel.name} price = {hotel.price} onPress={()=>{
          navigation.navigate('DetailsScreen')
        }} />
      ))}
    </ScrollView>
      );
};

export default HistoryScreen;