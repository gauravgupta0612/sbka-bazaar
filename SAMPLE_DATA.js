// Sample grocery items to seed your Firestore database
// Copy these items and add them manually in Firebase Console

export const sampleGroceryItems = [
  {
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    price: 50,
    quantity: 150,
    description: 'Organic red tomatoes, freshly picked',
    stock: 150,
  },
  {
    name: 'Green Apples',
    category: 'Fruits',
    price: 120,
    quantity: 80,
    description: 'Crisp and juicy green apples',
    stock: 80,
  },
  {
    name: 'Full Cream Milk',
    category: 'Dairy',
    price: 65,
    quantity: 200,
    description: '1L Fresh cow milk',
    stock: 200,
  },
  {
    name: 'Basmati Rice',
    category: 'Grains',
    price: 250,
    quantity: 50,
    description: 'Premium basmati rice - 1kg',
    stock: 50,
  },
  {
    name: 'Red Chili Powder',
    category: 'Spices',
    price: 180,
    quantity: 30,
    description: 'Pure red chili powder - 500g',
    stock: 30,
  },
  {
    name: 'Orange Juice',
    category: 'Beverages',
    price: 80,
    quantity: 120,
    description: 'Fresh orange juice - 1L',
    stock: 120,
  },
  {
    name: 'Mixed Nuts',
    category: 'Snacks',
    price: 320,
    quantity: 40,
    description: 'Premium mixed nuts - 500g',
    stock: 40,
  },
  {
    name: 'Chicken Breast',
    category: 'Meat & Fish',
    price: 280,
    quantity: 60,
    description: 'Fresh chicken breast - 500g',
    stock: 60,
  },
  {
    name: 'Onions',
    category: 'Vegetables',
    price: 40,
    quantity: 300,
    description: 'Fresh yellow onions',
    stock: 300,
  },
  {
    name: 'Bananas',
    category: 'Fruits',
    price: 60,
    quantity: 200,
    description: 'Fresh yellow bananas - bunch of 6',
    stock: 200,
  },
  {
    name: 'Paneer',
    category: 'Dairy',
    price: 300,
    quantity: 25,
    description: 'Fresh cottage cheese - 500g',
    stock: 25,
  },
  {
    name: 'Wheat Flour',
    category: 'Grains',
    price: 40,
    quantity: 100,
    description: 'Whole wheat flour - 1kg',
    stock: 100,
  },
  {
    name: 'Turmeric Powder',
    category: 'Spices',
    price: 150,
    quantity: 20,
    description: 'Pure turmeric powder - 500g',
    stock: 20,
  },
  {
    name: 'Green Tea',
    category: 'Beverages',
    price: 200,
    quantity: 50,
    description: 'Premium green tea - 100g',
    stock: 50,
  },
  {
    name: 'Chips',
    category: 'Snacks',
    price: 20,
    quantity: 500,
    description: 'Tasty potato chips - 30g pack',
    stock: 500,
  },
];

// How to add these items to Firestore:
// 1. Go to Firebase Console > Firestore Database
// 2. Click "Start Collection"
// 3. Name it "groceryItems"
// 4. Click "Add Document" and manually enter data
//    OR use the Firebase Admin SDK to bulk upload

// Example using Firebase Admin SDK:
/*
import admin from 'firebase-admin';

const db = admin.firestore();

async function seedDatabase() {
  for (const item of sampleGroceryItems) {
    await db.collection('groceryItems').add({
      ...item,
      createdAt: admin.firestore.Timestamp.now(),
      updatedAt: admin.firestore.Timestamp.now(),
    });
  }
  console.log('Database seeded successfully!');
}

seedDatabase();
*/

export default sampleGroceryItems;
