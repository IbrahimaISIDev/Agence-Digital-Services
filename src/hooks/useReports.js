// hooks/useReports.js
import { useState, useCallback } from 'react';
import { formatters } from '../utils/formatters';

export const useReports = (transactions, expenses) => {
  const [dateRange, setDateRange] = useState({
    start: new Date(),
    end: new Date()
  });

  const generateDailyReport = useCallback((date) => {
    const dayTransactions = transactions.filter(t => {
      const tDate = new Date(t.timestamp);
      return tDate.toDateString() === date.toDateString();
    });

    return {
      date: formatters.formatDate(date),
      totalTransactions: dayTransactions.length,
      totalAmount: dayTransactions.reduce((sum, t) => sum + t.amount, 0),
      totalCommissions: dayTransactions.reduce((sum, t) => sum + (t.commission || 0), 0),
      byType: dayTransactions.reduce((acc, t) => {
        acc[t.type] = (acc[t.type] || 0) + 1;
        return acc;
      }, {})
    };
  }, [transactions]);

  const generatePeriodReport = useCallback(() => {
    const periodTransactions = transactions.filter(t => {
      const tDate = new Date(t.timestamp);
      return tDate >= dateRange.start && tDate <= dateRange.end;
    });

    const periodExpenses = expenses.filter(e => {
      const eDate = new Date(e.date);
      return eDate >= dateRange.start && eDate <= dateRange.end;
    });

    return {
      startDate: formatters.formatDate(dateRange.start),
      endDate: formatters.formatDate(dateRange.end),
      transactions: {
        total: periodTransactions.length,
        amount: periodTransactions.reduce((sum, t) => sum + t.amount, 0),
        commissions: periodTransactions.reduce((sum, t) => sum + (t.commission || 0), 0),
        byType: periodTransactions.reduce((acc, t) => {
          acc[t.type] = (acc[t.type] || 0) + 1;
          return acc;
        }, {})
      },
      expenses: {
        total: periodExpenses.length,
        amount: periodExpenses.reduce((sum, e) => sum + e.amount, 0),
        byCategory: periodExpenses.reduce((acc, e) => {
          acc[e.category] = (acc[e.category] || 0) + e.amount;
          return acc;
        }, {})
      },
      netProfit: periodTransactions.reduce((sum, t) => sum + (t.commission || 0), 0) -
                 periodExpenses.reduce((sum, e) => sum + e.amount, 0)
    };
  }, [transactions, expenses, dateRange]);

  const exportReport = useCallback(async (report, format = 'pdf') => {
    // Implémentation de l'export (à faire)
    console.log('Exporting report:', report, 'in format:', format);
  }, []);

  return {
    dateRange,
    setDateRange,
    generateDailyReport,
    generatePeriodReport,
    exportReport
  };
};