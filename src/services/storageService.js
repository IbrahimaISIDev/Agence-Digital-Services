// services/storageService.js
export const storageService = {
    setItem(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    },
  
    getItem(key) {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
      }
    },
  
    removeItem(key) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error('Error removing from localStorage:', error);
      }
    },
  
    clear() {
      try {
        localStorage.clear();
      } catch (error) {
        console.error('Error clearing localStorage:', error);
      }
    }
  };