import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { addGroceryItem, uploadItemImage } from '../services/firebaseService';
import { recognizeGroceryItem } from '../ai/imageRecognition';

export default function AddItemScreen({ navigation }) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Vegetables',
    price: '',
    quantity: '',
    description: '',
  });
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recognizing, setRecognizing] = useState(false);

  const categories = [
    'Vegetables',
    'Fruits',
    'Dairy',
    'Grains',
    'Spices',
    'Beverages',
    'Snacks',
    'Meat & Fish'
  ];

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
      });

      if (!result.cancelled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick image');
    }
  };

  const recognizeItemFromImage = async () => {
    if (!imageUri) {
      Alert.alert('Error', 'Please select an image first');
      return;
    }

    try {
      setRecognizing(true);
      // TODO: Convert image to base64 and call recognizeGroceryItem
      // For now, this is a placeholder
      Alert.alert('Info', 'Image recognition feature coming soon!');
    } catch (error) {
      Alert.alert('Error', 'Failed to recognize item');
    } finally {
      setRecognizing(false);
    }
  };

  const handleAddItem = async () => {
    if (!formData.name || !formData.price || !formData.category) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      let imageUrl = null;

      // Upload image if selected
      if (imageUri) {
        imageUrl = await uploadItemImage(imageUri, formData.name);
      }

      // Add item to Firestore
      await addGroceryItem({
        name: formData.name,
        category: formData.category,
        price: parseFloat(formData.price),
        quantity: parseInt(formData.quantity) || 0,
        description: formData.description,
        imageUrl: imageUrl,
        stock: parseInt(formData.quantity) || 0,
      });

      Alert.alert('Success', 'Item added successfully!');
      
      // Reset form
      setFormData({
        name: '',
        category: 'Vegetables',
        price: '',
        quantity: '',
        description: '',
      });
      setImageUri(null);
      
      // Navigate back
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to add item: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add New Item</Text>
      </View>

      <View style={styles.form}>
        {/* Image Section */}
        <View style={styles.imageSection}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Text style={styles.placeholderText}>📸 No image selected</Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.imageButton}
            onPress={pickImage}
          >
            <Text style={styles.buttonText}>Choose Image</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.imageButton, styles.secondaryButton]}
            onPress={recognizeItemFromImage}
            disabled={recognizing}
          >
            {recognizing ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>🤖 AI Recognize</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <Text style={styles.label}>Item Name *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Fresh Tomatoes"
          value={formData.name}
          onChangeText={(text) =>
            setFormData({ ...formData, name: text })
          }
        />

        <Text style={styles.label}>Category *</Text>
        <View style={styles.categoryContainer}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryTag,
                formData.category === cat && styles.categoryTagActive,
              ]}
              onPress={() => setFormData({ ...formData, category: cat })}
            >
              <Text
                style={[
                  styles.categoryText,
                  formData.category === cat && styles.categoryTextActive,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Price (₹) *</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., 50"
          keyboardType="decimal-pad"
          value={formData.price}
          onChangeText={(text) =>
            setFormData({ ...formData, price: text })
          }
        />

        <Text style={styles.label}>Quantity/Stock</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., 100"
          keyboardType="number-pad"
          value={formData.quantity}
          onChangeText={(text) =>
            setFormData({ ...formData, quantity: text })
          }
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe the item..."
          multiline
          numberOfLines={4}
          value={formData.description}
          onChangeText={(text) =>
            setFormData({ ...formData, description: text })
          }
        />

        <TouchableOpacity
          style={[styles.addButton, loading && styles.addButtonDisabled]}
          onPress={handleAddItem}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.addButtonText}>Add Item to Store</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FF6B35',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  form: {
    padding: 15,
  },
  imageSection: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#E9E9E9',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
  },
  imageButton: {
    backgroundColor: '#FF6B35',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: '#4A90E2',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  categoryTag: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryTagActive: {
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
  addButton: {
    backgroundColor: '#FF6B35',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  addButtonDisabled: {
    opacity: 0.6,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
