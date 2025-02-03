// hooks/useAlerts.js
import { useState, useCallback } from 'react';
import { useAlertContext } from '../contexts/AlertContext';

export const useAlerts = () => {
  const { addAlert, removeAlert, clearAlerts } = useAlertContext();
  const [thresholds, setThresholds] = useState({
    cashMin: 50000,
    cashMax: 1000000,
    waveMin: 100000,
    orangeMin: 100000
  });

  const checkBalanceAlerts = useCallback((balances) => {
    if (balances.cash < thresholds.cashMin) {
      addAlert('Niveau de cash bas - Réapprovisionnement nécessaire', 'warning');
    }
    
    if (balances.cash > thresholds.cashMax) {
      addAlert('Niveau de cash élevé - Dépôt bancaire recommandé', 'warning');
    }

    if (balances.wave < thresholds.waveMin) {
      addAlert('Solde Wave bas - Réapprovisionnement nécessaire', 'warning');
    }

    if (balances.orange < thresholds.orangeMin) {
      addAlert('Solde Orange Money bas - Réapprovisionnement nécessaire', 'warning');
    }
  }, [addAlert, thresholds]);

  const checkExpenseAlerts = useCallback((expense) => {
    if (expense.amount > 100000) {
      addAlert(
        `Dépense importante détectée: ${expense.description} (${expense.amount.toLocaleString()} FCFA)`,
        'warning'
      );
    }
  }, [addAlert]);

  const updateThresholds = useCallback((newThresholds) => {
    setThresholds(prev => ({ ...prev, ...newThresholds }));
  }, []);

  return {
    checkBalanceAlerts,
    checkExpenseAlerts,
    updateThresholds,
    thresholds,
    removeAlert,
    clearAlerts
  };
};