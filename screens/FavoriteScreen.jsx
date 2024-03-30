import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import FoodCategories from '../components/Category';
import HotelCard from '../components/HotelCard';
import TopPicks from '../components/TopPicks';

const FavoriteScreen = ({navigation}) => {
    // Sample food items data
    const Hotels = [
        { id: 1, name: 'Dominos' },
        { id: 2, name: 'Biryani House' },
        { id: 3, name: 'KFC' },
        { id: 5, name: 'Moussaji' },
        { id: 6, name: 'Moussaji' },
        { id: 7, name: 'Moussaji' },
        { id: 8, name: 'Moussaji' },
        { id: 9, name: 'Moussaji' },
        { id: 10, name: 'Moussaji' },
        { id: 11, name: 'Moussaji' },
        { id: 12, name: 'Moussaji' },
        { id: 13, name: 'Moussaji' },
    ];
    return (
      <ScrollView>
      {Hotels.map((hotel) => (
        <HotelCard  key={hotel.id} name={hotel.name} onPress={()=>{
          navigation.navigate('DetailsScreen')
        }} />
      ))}
    </ScrollView>
      );
};

export default FavoriteScreen;