import axios from 'axios';

// Google ML Kit for image recognition (free tier available)
// This service helps users add items by recognizing grocery products from images

const API_ENDPOINT = 'https://vision.googleapis.com/v1/images:annotate';

// You need to get a free API key from Google Cloud Console
const API_KEY = 'YOUR_GOOGLE_CLOUD_API_KEY';

export const recognizeGroceryItem = async (imageBase64) => {
  try {
    const request = {
      requests: [
        {
          image: {
            content: imageBase64
          },
          features: [
            {
              type: 'LABEL_DETECTION',
              maxResults: 5
            },
            {
              type: 'OBJECT_LOCALIZATION',
              maxResults: 5
            }
          ]
        }
      ]
    };

    const response = await axios.post(
      `${API_ENDPOINT}?key=${API_KEY}`,
      request
    );

    const labels = response.data.responses[0].labelAnnotations || [];
    const objects = response.data.responses[0].localizedObjectAnnotations || [];

    // Extract grocery-relevant labels
    const groceryLabels = labels
      .filter(label => isGroceryProduct(label.description))
      .map(label => ({
        name: label.description,
        confidence: label.score
      }));

    return {
      items: groceryLabels,
      objects: objects,
      rawResponse: response.data
    };
  } catch (error) {
    console.error('Error recognizing item:', error);
    throw error;
  }
};

// Helper function to check if label is a grocery product
const isGroceryProduct = (label) => {
  const groceryKeywords = [
    'vegetable', 'fruit', 'dairy', 'milk', 'cheese', 'bread',
    'rice', 'flour', 'oil', 'butter', 'eggs', 'meat',
    'chicken', 'fish', 'spice', 'salt', 'sugar', 'cereal',
    'pasta', 'beans', 'nuts', 'coffee', 'tea', 'juice',
    'yogurt', 'honey', 'olive', 'tomato', 'onion', 'garlic'
  ];

  return groceryKeywords.some(keyword =>
    label.toLowerCase().includes(keyword)
  );
};

// Alternative: Use offline ML Kit (more practical for mobile)
export const useOfflineImageRecognition = async (imageUri) => {
  // This would use the device's built-in ML capabilities
  // Placeholder for local ML Kit implementation
  console.log('Using offline image recognition for:', imageUri);
};
