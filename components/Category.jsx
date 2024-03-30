import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const FoodCategories = () => {

  const categories = [
    { id: 1, name: 'Biryani', image: require('../assets/foods/biryani.jpg') },
    { id: 2, name: 'Chicken', image: require('../assets/foods/chicken.jpg') },
    { id: 3, name: 'Chowmin', image: require('../assets/foods/chowmin.png') },
    { id: 4, name: 'Momos', image: require('../assets/foods/momos.png') },
    { id: 5, name: 'Cake', image: require('../assets/foods/cake.jpg') },
    { id: 6, name: 'Burger', image: require('../assets/foods/burger.jpg') },
    { id: 7, name: 'Pizza', image: require('../assets/foods/pizza.jpg') },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity className="items-center mr-2 h-26">
      <Image source={item.image} className=" h-20 w-20 rounded-full" />
      <Text className="mt-2 font-bold text-center">{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="my-4 w-54">
      <Text className="flex justify-center text-center text-xl font-thin mb-4 mx-4">Favorite Categories</Text>
      <FlatList
        className = "mt-2"
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategory}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

    
    </View>
  );
};

export default FoodCategories;