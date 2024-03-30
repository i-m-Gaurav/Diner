import React from 'react';
import { Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import FoodCategories from '../components/Category';
import TopPicks from '../components/TopPicks';
import Restaurants from '../components/Restaurants';

const HomeScreen = () => {
    // Sample food items data
    return (
      <ScrollView>
      <SearchBar />
      <FoodCategories />
      <Text className="flex justify-center text-left ml-4 text-xl font-thin mt-5">Top Picks</Text>
      <TopPicks/>
      <Restaurants/>
    </ScrollView>
      );
};

export default HomeScreen;