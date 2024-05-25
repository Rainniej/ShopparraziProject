// src/screens/CartScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import CartContext from '../context/CartContext';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = ({ navigation }) => {
  const { cart, setCart } = useContext(CartContext);

  const updateQuantity = (id, newQuantity) => {
    setCart((currentItems) =>
      currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCart((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetail}>Size: {item.size}</Text>
            <Text style={styles.itemDetail}>Price: ${item.price.toFixed(2)}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
                <Ionicons name="remove-circle-outline" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
                <Ionicons name="add-circle-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.itemDetail}>Store: {item.store}</Text>
            <View style={styles.photoContainer}>
              <Image source={item.image} style={styles.photo} />
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.deleteButton}>
              <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Checkout')}>
        <Text style={styles.checkoutButtonText}>Go to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#FF006B',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    position: 'relative',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemDetail: {
    fontSize: 16,
    marginBottom: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  storeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeName: {
    fontSize: 16,
    marginLeft: 8,
  },
  storeIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  photoContainer: {
    flex: 1,
    marginLeft: 170, // 
    marginTop: -100, 
  },
  photo: {
    width: 120, 
    height: 120, 
    resizeMode: 'contain', 
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  checkoutButton: {
    backgroundColor: '#FF006B',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default CartScreen;
