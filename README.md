# 🏪 Sbka Bazzaar - AI-Powered Grocery Marketplace Mobile App

A modern React Native mobile application for grocery marketplace with AI-powered image recognition, Firebase integration, and complete CRUD operations.

## 📋 Features

- ✅ **Browse Grocery Items** - View all products with images, prices, and categories
- ✅ **Add Items with AI** - Use AI image recognition to add grocery items
- ✅ **Shopping Cart** - Add/remove items and checkout
- ✅ **Free Database** - Firebase Firestore for unlimited CRUD operations
- ✅ **Image Storage** - Firebase Cloud Storage for product images
- ✅ **Responsive UI** - Beautiful mobile-first design
- ✅ **Real-time Updates** - Live data synchronization

## 🛠️ Tech Stack

- **Frontend**: React Native (Expo)
- **Database**: Firebase Firestore (Free tier)
- **Storage**: Firebase Cloud Storage
- **Authentication**: Firebase Auth
- **AI/ML**: Google Cloud Vision API (Free tier)
- **Navigation**: React Navigation

## 📁 Project Structure

```
sbka-bazzaar/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js      # Browse grocery items
│   │   ├── AddItemScreen.js   # Add items with AI recognition
│   │   ├── CartScreen.js      # Shopping cart
│   │   └── ProfileScreen.js   # User profile
│   ├── services/
│   │   ├── firebaseConfig.js  # Firebase setup
│   │   └── firebaseService.js # CRUD operations
│   ├── ai/
│   │   └── imageRecognition.js # AI image recognition
│   └── utils/
├── App.js                      # Main navigation setup
├── app.json                    # Expo configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

### Installation

1. **Navigate to project directory**
```bash
cd sbka-bazzaar
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Setup Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create a new project
   - Enable Firestore Database (Free tier)
   - Generate Firebase config credentials
   - Replace `YOUR_*` placeholders in `src/services/firebaseConfig.js`

4. **Setup Google Cloud Vision (Optional - for AI recognition)**
   - Enable Google Cloud Vision API
   - Get API key from Google Cloud Console
   - Add to `src/ai/imageRecognition.js`

5. **Start the app**
```bash
npm start
# or
expo start
```

### Running on Devices

**Android**:
```bash
npm run android
```

**iOS**:
```bash
npm run ios
```

**Web**:
```bash
npm run web
```

## 📊 Firebase CRUD Operations

### Add Item
```javascript
import { addGroceryItem } from './src/services/firebaseService';

const itemId = await addGroceryItem({
  name: 'Fresh Tomatoes',
  category: 'Vegetables',
  price: 50,
  quantity: 100,
  description: 'Organic red tomatoes',
  imageUrl: 'https://...'
});
```

### Get All Items
```javascript
import { getAllGroceryItems } from './src/services/firebaseService';

const items = await getAllGroceryItems();
```

### Get Items by Category
```javascript
import { getItemsByCategory } from './src/services/firebaseService';

const vegetables = await getItemsByCategory('Vegetables');
```

### Update Item
```javascript
import { updateGroceryItem } from './src/services/firebaseService';

await updateGroceryItem(itemId, {
  price: 60,
  quantity: 80
});
```

### Delete Item
```javascript
import { deleteGroceryItem } from './src/services/firebaseService';

await deleteGroceryItem(itemId);
```

## 🤖 AI Features

The app includes AI-powered image recognition to help users add grocery items:

1. **Image Capture** - Take or upload a photo of a grocery item
2. **AI Recognition** - Google Cloud Vision API identifies the item
3. **Auto-fill Form** - Pre-populate item name and category
4. **Manual Adjustment** - Users can edit before saving

## 🗄️ Firestore Data Schema

### Collection: `groceryItems`
```
{
  id: string,
  name: string,
  category: string,
  price: number,
  quantity: number,
  description: string,
  imageUrl: string,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Collection: `carts`
```
{
  id: string,
  userId: string,
  itemId: string,
  quantity: number,
  addedAt: timestamp
}
```

## 🔒 Security

- **Firestore Rules**: Configure rules in Firebase Console
- **Authentication**: Implement Firebase Auth before production
- **Image Validation**: Verify images before upload
- **API Keys**: Move sensitive keys to environment variables

## 📱 Sample Grocery Categories

- Vegetables
- Fruits
- Dairy
- Grains
- Spices
- Beverages
- Snacks
- Meat & Fish

## 🐛 Troubleshooting

**"Firebase config is invalid"**
- Verify all credentials in `firebaseConfig.js`
- Check Firebase project settings

**"Image upload fails"**
- Ensure Firebase Storage bucket exists
- Check file size (max 10MB)
- Verify storage rules

**"AI recognition not working"**
- Verify Google Cloud Vision API is enabled
- Check API key validity
- Ensure internet connection

## 🔄 Next Steps

1. ✅ Configure Firebase with your credentials
2. ✅ Deploy Firestore rules
3. ✅ Setup Google Cloud Vision API
4. ✅ Test on Android/iOS device
5. ✅ Configure payment gateway
6. ✅ Deploy to Play Store / App Store

## 📞 Support

For Firebase issues: [Firebase Documentation](https://firebase.google.com/docs)  
For React Native: [React Native Docs](https://reactnative.dev)  
For Expo: [Expo Documentation](https://docs.expo.dev)

## 📄 License

MIT License - Feel free to use this project for your business

---

**Built with ❤️ for grocery retailers everywhere**
