 // services/storageService.js
class StorageService {
  setItem(key, value) {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }

  getItem(key) {
    const item = localStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch {
      return item;
    }
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }

  clearAll() {
    localStorage.clear();
  }

  setToken(token) {
    this.setItem('token', token);
  }

  getToken() {
    return this.getItem('token');
  }

  setUser(user) {
    this.setItem('user', user);
  }

  getUser() {
    return this.getItem('user');
  }

  setLastSync(date) {
    this.setItem('lastSync', date);
  }

  getLastSync() {
    return this.getItem('lastSync');
  }
}

export const storageService = new StorageService();