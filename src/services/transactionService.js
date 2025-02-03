// services/transactionService.js
import { api } from './api';

class TransactionService {
  async getTransactions(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return api.get(`/transactions?${queryString}`);
  }

  async getTransaction(id) {
    return api.get(`/transactions/${id}`);
  }

  async createTransaction(transaction) {
    return api.post('/transactions', transaction);
  }

  async updateTransaction(id, transaction) {
    return api.put(`/transactions/${id}`, transaction);
  }

  async deleteTransaction(id) {
    return api.delete(`/transactions/${id}`);
  }

  async cancelTransaction(id, reason) {
    return api.post(`/transactions/${id}/cancel`, { reason });
  }

  async getTransactionStats(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return api.get(`/transactions/stats?${queryString}`);
  }
}

export const transactionService = new TransactionService();