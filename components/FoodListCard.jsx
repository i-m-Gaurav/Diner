import React from 'react'
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

const FoodListCard = ({name,price,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="w-full bg-gray-100 border border-gray-200 mt-2 shadow-sm p-4 rounded-lg">
        <View>
          <View className="p-2">
            {/* Hotel name */}
            <Text className="text-lg font-bold mb-2">{name}</Text>
            {/* Category name and price */}
            <Text className="text-sm text-gray-600 mb-1">{price}</Text>
            {/* Distance */}
            <Text className="text-sm text-gray-600">0.5 miles away</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default FoodListCard