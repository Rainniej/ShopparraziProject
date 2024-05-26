import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ProductDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { product } = route.params;
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    // Show alert with product name and quantity
    Alert.alert(
      "Saved to Shopping List",
      `${product.name} 'Quantity:${quantity}'`
    );
  };

  const handleComparePrice = () => {
    navigation.navigate("ComparePriceScreen", { product });
  };

  const handleContinueShopping = () => {
    navigation.navigate("Home");
  };

  // Inside the return statement, within the TouchableOpacity for the "Continue Shopping" button
  <TouchableOpacity
    style={[styles.button, styles.fullWidth]}
    onPress={handleContinueShopping}
  >
    <Text style={styles.buttonText}>Continue Shopping</Text>
  </TouchableOpacity>;

  const updateQuantity = (newQuantity) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View key={product.id} style={styles.productItem}>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.quantityLabel}>180g $3.00</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateQuantity(quantity - 1)}
          >
            <Ionicons name="remove" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateQuantity(quantity + 1)}
          >
            <Ionicons name="add" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.fullWidth]}
            onPress={handleAddToCart}
          >
            <Text style={styles.buttonText}>Save Shopping List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.fullWidth]}
            onPress={handleComparePrice}
          >
            <Text style={styles.buttonText}>Compare Price</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.fullWidth]}
            onPress={handleContinueShopping}
          >
            <Text style={styles.buttonText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "white",
  },
  productItem: {
    alignItems: "center",
    marginBottom: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 20,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  quantityLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 20,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#FF006B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  fullWidth: {
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ProductDetailScreen;
