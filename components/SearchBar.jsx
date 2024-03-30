// SearchBar.jsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [foodData, setFoodData] = useState([]);

  const fetchFoodData = async (text) => {
    try {
      // Replace this with your actual API call
      const response = await fetch(`https://api.example.com/foods?search=${text}`);
      const data = await response.json();
      setFoodData(data);
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
    fetchFoodData(text);
  };

  return (
    <View>
    
      <View className = "flex-row items-center bg-white rounded-lg shadow-sm px-2 py-5  my-5 ">
        <Ionicons name="search" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for food..."
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  searchIcon: {
    fontSize: 24,
    color: '#999',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default SearchBar;