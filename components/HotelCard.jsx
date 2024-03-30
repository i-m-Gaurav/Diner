import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

const HotelCard = ({name,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View className="flex justify-center  ">
            <View className="w-full bg-gray-100  p-4 rounded-lg">
                {/* Upper half: Image */}
                <Image
                    source={require('../assets/foods/biryani.jpg')}
                    className="w-full h-40 rounded-t-lg mb-2"
                />
                {/* Bottom half: Text content */}
                <View className="p-2 ">
                    {/* Hotel name */}
                    <Text className="text-lg font-bold mb-2">{name}</Text>
                    {/* Category name and price */}
                    <Text className="text-sm text-gray-600 mb-1">Indian Cuisine | $10</Text>
                    {/* Distance */}
                    <Text className="text-sm text-gray-600">0.5 miles away</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    );
};

export default HotelCard;