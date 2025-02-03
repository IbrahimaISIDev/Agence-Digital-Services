// services/clientService.js
import { api } from './api';

class ClientService {
  async getClients(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return api.get(`/clients?${queryString}`);
  }

  async getClientByPhone(phone) {
    return api.get(`/clients/${phone}`);
  }

  async createClient(client) {
    return api.post('/clients', client);
  }

  async updateClient(phone, client) {
    return api.put(`/clients/${phone}`, client);
  }

  async getLoyalClients() {
    return api.get('/clients/loyal');
  }

  async getClientTransactions(phone) {
    return api.get(`/clients/${phone}/transactions`);
  }

  async addClientNote(phone, note) {
    return api.post(`/clients/${phone}/notes`, { note });
  }
}

export const clientService = new ClientService();