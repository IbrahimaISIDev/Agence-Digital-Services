// hooks/useTransactionFilters.js
import { useState, useMemo } from 'react';

export const useTransactionFilters = (transactions) => {
  const [filters, setFilters] = useState({
    type: '',
    minAmount: '',
    maxAmount: '',
    startDate: '',
    endDate: '',
    client: ''
  });

  const filteredTransactions = useMemo(() => {
    return transactions.filter(transaction => {
      // Filtre par type
      if (filters.type && transaction.type !== filters.type) {
        return false;
      }

      // Filtre par montant
      if (filters.minAmount && transaction.amount < Number(filters.minAmount)) {
        return false;
      }
      if (filters.maxAmount && transaction.amount > Number(filters.maxAmount)) {
        return false;
      }

      // Filtre par date
      if (filters.startDate) {
        const transactionDate = new Date(transaction.timestamp);
        const startDate = new Date(filters.startDate);
        if (transactionDate < startDate) {
          return false;
        }
      }
      if (filters.endDate) {
        const transactionDate = new Date(transaction.timestamp);
        const endDate = new Date(filters.endDate);
        if (transactionDate > endDate) {
          return false;
        }
      }

      // Filtre par client
      if (filters.client) {
        const clientSearch = filters.client.toLowerCase();
        const clientMatch = 
          transaction.clientName?.toLowerCase().includes(clientSearch) ||
          transaction.clientPhone?.includes(clientSearch);
        if (!clientMatch) {
          return false;
        }
      }

      return true;
    });
  }, [transactions, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const resetFilters = () => {
    setFilters({
      type: '',
      minAmount: '',
      maxAmount: '',
      startDate: '',
      endDate: '',
      client: ''
    });
  };

  return {
    filters,
    filteredTransactions,
    handleFilterChange,
    resetFilters
  };
};