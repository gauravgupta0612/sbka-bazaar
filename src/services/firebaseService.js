import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
  orderBy
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage';
import { db, storage } from './firebaseConfig';

// GROCERY ITEMS CRUD OPERATIONS

// Add new grocery item
export const addGroceryItem = async (itemData) => {
  try {
    const docRef = await addDoc(collection(db, 'groceryItems'), {
      ...itemData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding item:', error);
    throw error;
  }
};

// Get all grocery items
export const getAllGroceryItems = async () => {
  try {
    const querySnapshot = await getDocs(
      collection(db, 'groceryItems')
    );
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// Get items by category
export const getItemsByCategory = async (category) => {
  try {
    const q = query(
      collection(db, 'groceryItems'),
      where('category', '==', category)
    );
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.error('Error fetching items by category:', error);
    throw error;
  }
};

// Update grocery item
export const updateGroceryItem = async (itemId, updates) => {
  try {
    const itemRef = doc(db, 'groceryItems', itemId);
    await updateDoc(itemRef, {
      ...updates,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

// Delete grocery item
export const deleteGroceryItem = async (itemId) => {
  try {
    await deleteDoc(doc(db, 'groceryItems', itemId));
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};

// CART OPERATIONS

export const addToCart = async (userId, itemId, quantity) => {
  try {
    const cartRef = collection(db, 'carts');
    const docRef = await addDoc(cartRef, {
      userId,
      itemId,
      quantity,
      addedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

export const getUserCart = async (userId) => {
  try {
    const q = query(
      collection(db, 'carts'),
      where('userId', '==', userId)
    );
    const querySnapshot = await getDocs(q);
    const cartItems = [];
    querySnapshot.forEach((doc) => {
      cartItems.push({ id: doc.id, ...doc.data() });
    });
    return cartItems;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};

// IMAGE UPLOAD FOR ITEMS

export const uploadItemImage = async (uri, itemName) => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const timestamp = Date.now();
    const fileName = `items/${itemName}-${timestamp}`;
    const storageRef = ref(storage, fileName);
    
    await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
