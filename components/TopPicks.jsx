import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const TopPicks = () => {

  const categories = [
    { id: 1, name: 'Hydrabadi Biryani', image: require('../assets/foods/biryani.jpg'), price: "100/-"},
    { id: 2, name: 'Chicken', image: require('../assets/foods/chicken.jpg'), price: "100/-"},
    { id: 3, name: 'Chowmin', image: require('../assets/foods/chowmin.png') , price: "100/-"},
    { id: 4, name: 'Momos', image: require('../assets/foods/momos.png'), price: "100/-" },
    { id: 5, name: 'Cake', image: require('../assets/foods/cake.jpg'), price: "100/-" },
    { id: 6, name: 'Burger', image: require('../assets/foods/burger.jpg'), price: "100/-" },
    { id: 7, name: 'Pizza', image: require('../assets/foods/pizza.jpg'), price: "100/-" },
    { id: 8, name: 'Hydrabadi Biryani', image: require('../assets/foods/biryani.jpg'), price: "100/-"},
    { id: 9, name: 'Chicken', image: require('../assets/foods/chicken.jpg'), price: "100/-"},
    { id: 10, name: 'Chowmin', image: require('../assets/foods/chowmin.png') , price: "100/-"},
    { id: 11, name: 'Momos', image: require('../assets/foods/momos.png'), price: "100/-" },
    { id: 12, name: 'Cake', image: require('../assets/foods/cake.jpg'), price: "100/-" },
    { id: 13, name: 'Burger', image: require('../assets/foods/burger.jpg'), price: "100/-" },
    { id: 14, name: 'Pizza', image: require('../assets/foods/pizza.jpg'), price: "100/-" },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity className=" mr-2 h-26">
      <Image source={item.image} className=" h-44 w-32 rounded-lg " />
      <Text className="mt-2 font-bold text-left">{item.name}</Text>
      <Text className="mt-2 font-bold flex text-left">{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="my-4 w-54 ml-3">
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

export default TopPicks;