// src/screens/ProductDetailScreen.js
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import CartContext from '../context/CartContext';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { cart, setCart } = useContext(CartContext);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      // Mock data
      const mockData = {
        product: "Chobani Oat Milk Barista Edition",
        prices: [
          {
            store: "Coles",
            price: 4.00,
            url: "https://www.coles.com.au/product/chobani-oat-milk-barista-edition-1l-5443825"
          },
          {
            store: "Woolworths",
            price: 5.00,
            url: "https://www.woolworths.com.au/shop/productdetails/238299/chobani-oat-milk-barista-edition"
          },
          {
            store: "Aldi",
            price: 6.00,
            url: "https://www.aldi.com.au/groceries/fresh-produce/dairy-eggs/"
          }
        ]
      };

      setPrices(mockData.prices);
      setLoading(false);
    };

    fetchPrices();
  }, [product.name]);

  const addToCart = () => {
    setCart([...cart, { ...product, id: Date.now().toString(), quantity: 1 }]);
    navigation.navigate('Cart');
  };

  const renderPriceItem = ({ item }) => (
    <View style={styles.priceItem}>
      <Text style={styles.storeName}>{item.store}</Text>
      <Text style={styles.storePrice}>${item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.size}>Size: {product.size}</Text>
       {/* Row for the "No added sugar" feature */}
       <View style={styles.featureRow}>
            <Text style={[styles.featureText, styles.noFeature]}>✘</Text>
            <Text style={styles.featureLabel}>No added sugar</Text>
          </View>
          {/* Row for the "Nut free" feature */}
          <View style={styles.featureRow}>
            <Text style={[styles.featureText, styles.noFeature]}>✘</Text>
            <Text style={styles.featureLabel}>Nut free</Text>
          </View>
          {/* Row for the "Soy free" feature */}
          <View style={styles.featureRow}>
            <Text style={[styles.featureText, styles.hasFeature]}>✘</Text>
            <Text style={styles.featureLabel}>Soy free</Text>
          </View>
        <Text style={styles.price}>Price: ${product.price}</Text>
        <Text style={styles.store}>Store: {product.store}</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={addToCart}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      <View style={styles.priceComparisonContainer}>
        <Text style={styles.priceComparisonTitle}>Price Comparison</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={prices}
            renderItem={renderPriceItem}
            keyExtractor={(item) => item.store}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  detailsContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  size: {
    fontSize: 18,
    marginBottom: 8,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  featureText: {
    fontSize: 16,
    marginRight: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  store: {
    fontSize: 16,
    color: 'gray',
  },
  addButton: {
    backgroundColor: '#FF006B',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  priceComparisonContainer: {
    marginTop: 20,
  },
  priceComparisonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  storeName: {
    fontSize: 16,
  },
  storePrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
