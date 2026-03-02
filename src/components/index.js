import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// This is a simple product card component
export function ProductCard({ product, onAddToCart }) {
  return (
    <View style={styles.card}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>₹{product.price}</Text>
    </View>
  );
}

// Cart item component
export function CartItem({ item, onRemove }) {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.quantity}>x{item.quantity}</Text>
      <Text style={styles.price}>₹{item.price * item.quantity}</Text>
    </View>
  );
}

// Category selector component
export function CategorySelector({ categories, selected, onSelect }) {
  return (
    <View style={styles.categoryContainer}>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          style={[
            styles.categoryButton,
            selected === cat && styles.categoryButtonActive,
          ]}
          onPress={() => onSelect(cat)}
        >
          <Text
            style={[
              styles.categoryText,
              selected === cat && styles.categoryTextActive,
            ]}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B35',
    marginTop: 5,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  itemName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  quantity: {
    fontSize: 12,
    marginHorizontal: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryButtonActive: {
    backgroundColor: '#FF6B35',
    borderColor: '#FF6B35',
  },
  categoryText: {
    fontSize: 12,
    color: '#666',
  },
  categoryTextActive: {
    color: 'white',
    fontWeight: '600',
  },
});

export default {
  ProductCard,
  CartItem,
  CategorySelector,
};
