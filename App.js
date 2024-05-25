// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import CartScreen from './src/screens/CartScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import BottomNavigation from './src/components/BottomNavigation';
import CartContext from './src/context/CartContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeMain" component={HomeScreen} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    <Stack.Screen name="Checkout" component={CheckoutScreen} />
  </Stack.Navigator>
);

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
          <Tab.Screen name="Home" component={HomeStack} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: 'home-outline',
            tabBarIconFocused: 'home',
          }}
            />
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarIcon: 'search-outline',
              tabBarIconFocused: 'search',
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarLabel: 'Cart',
              tabBarIcon: 'cart-outline',
              tabBarIconFocused: 'cart',
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              tabBarLabel: 'Favorites',
              tabBarIcon: 'heart-outline',
              tabBarIconFocused: 'heart',
            }}
          />
          <Tab.Screen
            name="Account"
            component={LoginScreen}
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: 'person-outline',
              tabBarIconFocused: 'person',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartContext.Provider>
  );
};

export default App;