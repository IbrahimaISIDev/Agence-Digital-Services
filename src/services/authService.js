// services/authService.js
import { api } from './api';
import { storageService } from './storageService';

class AuthService {
  async login(credentials) {
    const response = await api.post('/auth/login', credentials);
    if (response.token) {
      storageService.setToken(response.token);
      storageService.setUser(response.user);
    }
    return response;
  }

  async register(userData) {
    const response = await api.post('/auth/register', userData);
    if (response.token) {
      storageService.setToken(response.token);
      storageService.setUser(response.user);
    }
    return response;
  }

  async logout() {
    try {
      await api.post('/auth/logout');
    } finally {
      storageService.clearAll();
    }
  }

  async getCurrentUser() {
    const user = storageService.getUser();
    if (!user) return null;
    
    try {
      const response = await api.get('/auth/me');
      storageService.setUser(response);
      return response;
    } catch (error) {
      this.logout();
      return null;
    }
  }

  async changePassword(data) {
    return api.put('/auth/change-password', data);
  }

  isAuthenticated() {
    return !!storageService.getToken();
  }
}

export const authService = new AuthService();