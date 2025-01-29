// services/clientService.js
import { api } from './api';

export const clientService = {
  async getAll() {
    return api.get('/clients');
  },

  async create(client) {
    return api.post('/clients', client);
  },

  async update(client) {
    return api.put(`/clients/${client.phone}`, client);
  }
};