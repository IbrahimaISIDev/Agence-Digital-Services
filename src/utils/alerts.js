// utils/alerts.js
import { formatters } from './formatters';

export const ALERT_THRESHOLDS = {
  cashMin: 50000,
  cashMax: 1000000,
  waveMin: 100000,
  orangeMin: 100000,
};

export const checkAlerts = (balances, expenses) => {
  const alerts = [];

  if (balances.cash < ALERT_THRESHOLDS.cashMin) {
    alerts.push({
      type: "warning",
      message: "Niveau de cash bas - Réapprovisionnement nécessaire",
    });
  }

  if (balances.cash > ALERT_THRESHOLDS.cashMax) {
    alerts.push({
      type: "warning",
      message: "Niveau de cash élevé - Dépôt bancaire recommandé",
    });
  }

  if (balances.wave < ALERT_THRESHOLDS.waveMin) {
    alerts.push({
      type: "warning",
      message: "Solde Wave bas - Réapprovisionnement nécessaire",
    });
  }

  if (balances.orange < ALERT_THRESHOLDS.orangeMin) {
    alerts.push({
      type: "warning",
      message: "Solde Orange Money bas - Réapprovisionnement nécessaire",
    });
  }

  const largeExpense = expenses.find((expense) => expense.amount > 100000);
  if (largeExpense) {
    alerts.push({
      type: "warning",
      message: `Dépense importante détectée: ${
        largeExpense.description
      } (${formatters.formatAmount(largeExpense.amount)})`,
    });
  }

  return alerts;
};
