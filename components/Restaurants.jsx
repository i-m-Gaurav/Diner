import React from 'react'
import { View, Text, Button } from 'react-native'
import HotelCard from '../components/HotelCard'

const Restaurants = ({ navigation }) => {
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
        <View>
            <View>
                <Text className="flex justify-center text-center text-xl font-thin mb-4 mx-4">All Restaurants</Text>
            </View>
            {Hotels.map((hotel) => (
                <HotelCard key={hotel.id} name={hotel.name} onPress={() => navigation.navigate('DetailsScreen')} />
            ))}
        </View>
    )
}

export default Restaurants;



