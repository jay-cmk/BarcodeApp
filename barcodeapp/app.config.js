const withCleartextTraffic = require('./withCleartextTraffic');


module.exports = {
  "expo": {
    "name": "BarCode",
    "slug": "BarcodeScannerApp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/logo.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "infoPlist": {
        "NSCameraUsageDescription": "Allow BarcodeScan to access your camera for barcode scanning."
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.example.DevBarCode",
      "permissions": [
        "CAMERA",
        "INTERNET",
        "android.permission.CAMERA"
      ]
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      [
        "react-native-vision-camera",
        {
          "cameraPermissionText": "Allow BarcodeScan to access your camera for barcode scanning."
        }
      ],
      "expo-notifications",
      "expo-barcode-scanner"
    ],
   
    "extra": {
      "eas": {
        "projectId": "1e093677-0b04-49b4-b9e7-08efb353e4fc"
      }
    },
    "newArchEnabled": true
  },
};
