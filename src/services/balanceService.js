// services/balanceService.js
import { api } from './api';

export const balanceService = {
  async get() {
    return api.get('/balances');
  },

  async update(balances) {
    return api.put('/balances', balances);
  }
};