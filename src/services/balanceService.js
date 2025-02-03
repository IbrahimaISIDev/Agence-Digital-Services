// services/balanceService.js
import { api } from './api';

class BalanceService {
  async getBalances() {
    return api.get('/balances');
  }

  async updateBalances(balances) {
    return api.put('/balances', balances);
  }

  async recordTransaction(transaction) {
    return api.post('/balances/transaction', transaction);
  }

  async getBalanceHistory(params) {
    return api.get('/balances/history?' + new URLSearchParams(params));
  }

  async reconcileBalances() {
    return api.post('/balances/reconcile');
  }
}

export const balanceService = new BalanceService();