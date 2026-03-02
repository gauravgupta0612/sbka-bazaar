#!/bin/bash

# QUICK START GUIDE FOR SBKA BAZZAAR
# ===================================

echo "🏪 Sbka Bazzaar - Quick Start Guide"
echo ""

# Check if Node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "📥 Download from: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Installation complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Open src/services/firebaseConfig.js"
echo "2. Add your Firebase credentials"
echo "3. Run: npm start"
echo "4. Scan QR code with Expo Go app"
echo ""
echo "🔧 Firebase Setup:"
echo "   - Go to https://console.firebase.google.com"
echo "   - Create new project"
echo "   - Enable Firestore Database"
echo "   - Copy credentials to firebaseConfig.js"
echo ""
echo "📖 Full guide: Check README.md and FIREBASE_SETUP.js"
echo ""
