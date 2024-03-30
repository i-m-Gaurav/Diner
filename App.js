import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import FavoriteScreen from './screens/FavoriteScreen.jsx';
import HomeStack from './components/HomeStack.jsx';
import HistoryScreen from './screens/HistoryScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import FavoriteStack from './components/FavoriteStack.jsx';
import HistoryStack from './components/HistoryStack.jsx';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PaperProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Favorites') {
                  iconName = focused ? 'heart' : 'heart-outline';
                } else if (route.name === 'Profile') {
                  iconName = focused ? 'person' : 'person-outline';
                } else if (route.name === 'History') {
                  iconName = focused ? 'time' : 'time-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              headerShown:false,
              tabBarStyle: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              },
            })}
          >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Favorites" component={FavoriteStack} />
            <Tab.Screen name="History" component={HistoryStack} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </PaperProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;