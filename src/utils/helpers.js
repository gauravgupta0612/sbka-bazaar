// Utility functions for the app

// Format price to Indian currency
export const formatPrice = (price) => {
  return `₹${parseFloat(price).toFixed(2)}`;
};

// Format date
export const formatDate = (date) => {
  if (!(date instanceof Date)) {
    date = date.toDate();
  }
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// Calculate discount percentage
export const calculateDiscount = (originalPrice, discountedPrice) => {
  return Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  );
};

// Validate email
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number (Indian format)
export const validatePhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

// Get category emoji
export const getCategoryEmoji = (category) => {
  const emojis = {
    'Vegetables': '🥬',
    'Fruits': '🍎',
    'Dairy': '🥛',
    'Grains': '🌾',
    'Spices': '🌶️',
    'Beverages': '☕',
    'Snacks': '🍿',
    'Meat & Fish': '🍗',
  };
  return emojis[category] || '🛒';
};

// Calculate cart total
export const calculateCartTotal = (cartItems) => {
  return cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
};

export default {
  formatPrice,
  formatDate,
  calculateDiscount,
  validateEmail,
  validatePhone,
  getCategoryEmoji,
  calculateCartTotal,
};
