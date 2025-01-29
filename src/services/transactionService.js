// services/transactionService.js
import { api } from './api';

export const transactionService = {
  async getAll() {
    return api.get('/transactions');
  },

  async create(transaction) {
    return api.post('/transactions', transaction);
  },

  async update(id, transaction) {
    return api.put(`/transactions/${id}`, transaction);
  },

  async delete(id) {
    return api.delete(`/transactions/${id}`);
  }
};