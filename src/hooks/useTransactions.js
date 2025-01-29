// hooks/useTransactions.js
import { useState, useCallback } from 'react';
import { transactionService } from '../services/transactionService';

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addTransaction = useCallback(async (transaction) => {
    try {
      setIsLoading(true);
      const newTransaction = {
        ...transaction,
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        amount: parseFloat(transaction.amount),
        commission: parseFloat(transaction.commission || 0)
      };

      await transactionService.create(newTransaction);
      setTransactions(prev => [...prev, newTransaction]);
      return newTransaction;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const searchTransactions = useCallback((query) => {
    return transactions.filter(t => 
      t.clientPhone?.includes(query) ||
      t.clientName?.toLowerCase().includes(query.toLowerCase()) ||
      t.description?.toLowerCase().includes(query.toLowerCase())
    );
  }, [transactions]);

  const getTransactionsByDate = useCallback((date) => {
    return transactions.filter(t => {
      const tDate = new Date(t.timestamp);
      return tDate.toDateString() === date.toDateString();
    });
  }, [transactions]);

  return {
    transactions,
    isLoading,
    error,
    addTransaction,
    searchTransactions,
    getTransactionsByDate
  };
};