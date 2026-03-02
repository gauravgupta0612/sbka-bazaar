@echo off
REM QUICK START GUIDE FOR SBKA BAZZAAR (Windows)
REM ======================================

echo 🏪 Sbka Bazzaar - Quick Start Guide
echo.

REM Check if Node is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. 
    echo 📥 Download from: https://nodejs.org
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✅ Node.js version: %NODE_VERSION%
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm is not installed.
    exit /b 1
)

for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo ✅ npm version: %NPM_VERSION%
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

echo.
echo ✅ Installation complete!
echo.
echo 📋 Next Steps:
echo 1. Open src/services/firebaseConfig.js
echo 2. Add your Firebase credentials
echo 3. Run: npm start
echo 4. Scan QR code with Expo Go app
echo.
echo 🔧 Firebase Setup:
echo    - Go to https://console.firebase.google.com
echo    - Create new project
echo    - Enable Firestore Database
echo    - Copy credentials to firebaseConfig.js
echo.
echo 📖 Full guide: Check README.md and FIREBASE_SETUP.js
echo.
pause
