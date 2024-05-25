// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const product = {
    name: 'Chobani Oat Milk Barista Edition',
    size: '1L',
    noAddedSugar: false,
    nutFree: true,
    soyFree: true,
    price: 4.00,
    store: 'Coles',
    image: require('../../assets/2.png'),
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shoparrazi</Text>
        <TouchableOpacity style={styles.searchIcon}>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TextInput style={styles.searchInput} placeholder="Search" />
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All{'\n'}</Text>
        </TouchableOpacity>
      </View>
      {/* Category icons */}
      <View style={styles.container}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryItem}>
            <Image source={require('../../assets/cat1.png')} style={styles.image} />
            <Text style={styles.subcategoriesSection}>Fruit</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={require('../../assets/cat2.png')} style={styles.image} />
            <Text style={styles.subcategoriesSection}>Meat</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={require('../../assets/cat3.png')} style={styles.image} />
            <Text style={styles.subcategoriesSection}>Milk & Egg</Text>
          </View>
        </View>
      </View>
      {/* Flash label */}
      <View style={styles.flashSaleSection}>
        <Text style={styles.flashSaleSection}>Flash Sale</Text>
      </View>
      {/* Flash items */}
      <View style={styles.containerFlash}>
        <View style={styles.headerFlash}>
          <Text style={styles.titleFlash}>Chobani Oat Milk</Text>
          <Text style={styles.subtitle}>Barista Edition</Text>
        </View>
        <Text style={styles.size}>Size: 1L</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$4.00 per 1L</Text>
          <Text style={styles.oldPrice}>Was $5.00 on Apr 2024</Text>
        </View>
        <Text style={styles.contributor}>Store: Coles</Text>
        <View style={styles.moreDetailsContainer}>
          <TouchableOpacity
            style={styles.moreDetails}
            onPress={() => navigation.navigate('ProductDetail', { product })}
          >
            <Text style={styles.moreDetails}>More Detail...</Text>
          </TouchableOpacity>
          <View style={styles.photoContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product })}>
              <Image source={require('../../assets/2.png')} style={styles.photo} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Additional sections for Popular, New Arrival, etc. */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF006B',
  },
  searchIcon: {
    padding: 5,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    fontSize: 16,
  },
  categoriesSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  flashSaleSection: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  subcategoriesSection: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FF006B',
  },
  // Flash items
  containerFlash: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerFlash: {
    marginBottom: 8,
  },
  titleFlash: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  size: {
    fontSize: 16,
    marginBottom: 8,
  },
  priceContainer: {
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  contributor: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  moreDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreDetails: {
    flex: 1,
    fontSize: 16,
    color: '#FF006B',
  },
  photoContainer: {
    flex: 1,
    marginRight: 50, // Add margin for spacing
    marginTop: -140,
  },
  photo: {
    width: 200,
    height: 200,
    resizeMode: 'contain', // 
  },
  // Add styles for the rest of the components
});

export default HomeScreen;