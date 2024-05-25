// src/screens/FavoriteScreen.js
// This is the Favorites component that shows the user's favorite products.
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const FavoriteScreen = () => {
  // Dummy data for favorite items
  const favoriteItems = [
    {
      id: '1',
      name: 'Dairy Farmers Full Cream Milk',
      size: '2L',
      price: '$4.30',
      imageUrl: 'https://cdn0.woolworths.media/content/wowproductimages/large/088436.jpg', 
      store: 'woolworths',
    },
    {
      id: '2',
      name: 'Pace Farm Liberty Eggs 6 Large Cage Free Eggs',
      size: '330 g',
      price: '$3.90',
      imageUrl: 'https://cdn0.woolworths.media/content/wowproductimages/large/059789.jpg', 
      store: 'woolworths',
    },
    // ... more favorite items
  ];

  const handleAddToCart = (itemId) => {
    // Logic to add the item to the cart
  };

  const handleBuyNow = (itemId) => {
    // Logic to buy the item immediately
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>Size: {item.size}</Text>
            <Text style={styles.itemDetails}>Price: {item.price}</Text>
            <Text style={styles.itemDetails}>Store: {item.store}</Text>
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleAddToCart(item.id)}
              >
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buyNowButton]}
                onPress={() => handleBuyNow(item.id)}
              >
                <Text style={styles.buttonText}>Buy it now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#FF006B',
    borderRadius: 5,
    padding: 10,
    margin: 6,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDetails: {
    fontSize: 14,
    marginBottom: 5,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buyNowButton: {
    backgroundColor: '#FF006B',
  },
  buttonText: {
    color: '#fff',
  },
});

export default FavoriteScreen;
