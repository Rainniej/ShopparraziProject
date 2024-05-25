// screens/ExploreScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import local images for categories
import fruitsImage from '../../assets/cat1.png';
import meatImage from '../../assets/cat2.png';
import milkAndEggImage from '../../assets/cat3.png';
import snacksImage from '../../assets/cat4.png'; 
import beveragesImage from '../../assets/cat5.png';
import bakeryImage from '../../assets/cat6.png'; 

// Import local images for buy again items
import milkImage from '../../assets/milk.jpg';
import eggsImage from '../../assets/eggs.jpg';

const ExploreScreen = () => {
  // Dummy data for previously bought items and categories
  const buyAgainItems = [
    { id: '1', name: 'Dairy Farmers Full Cream Milk', image: milkImage, price: '$4.30', store: 'woolworths' },
    { id: '2', name: 'Pace Farm Liberty Eggs 6 Large Cage Free Eggs', image: eggsImage, price: '$3.90', store: 'woolworths' },
    // ... more items
  ];

  const categories = [
    { id: '1', name: 'Fruits', image: fruitsImage },
    { id: '2', name: 'Meat', image: meatImage },
    { id: '3', name: 'Milk & Egg', image: milkAndEggImage },
    { id: '4', name: 'Snacks', image: snacksImage }, // New category
    { id: '5', name: 'Beverages', image: beveragesImage }, // New category
    { id: '6', name: 'Bakery', image: bakeryImage }, // New category
    // ... more categories
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.buyAgainSection}>
        <Text style={styles.sectionTitle}>Buy again</Text>
        <FlatList
          data={buyAgainItems}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.buyAgainItem}>
              <Image source={item.image} style={styles.buyAgainImage} />
              <Text style={styles.buyAgainName}>{item.name}</Text>
              <Text style={styles.buyAgainPrice}>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryItem}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  searchInput: {
    flex: 1,
  },
  buyAgainSection: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  buyAgainItem: {
    margin: 10,
    width: 120,
    alignItems: 'center',
  },
  buyAgainImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  buyAgainName: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  buyAgainPrice: {
    fontSize: 15,
    color: 'gray',
    textAlign: 'center',
  },
  categoriesSection: {
    marginVertical: 10,
  },
  categoryItem: {
    margin: 15,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF006B',
    borderRadius: 5,
  },
  categoryImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: -15,
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ExploreScreen;
