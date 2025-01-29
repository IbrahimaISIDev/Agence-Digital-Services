// hooks/useBalances.js
import { useState, useCallback } from "react";
import { balanceService } from "../services/balanceService";

export const useBalances = () => {
  const [balances, setBalances] = useState({
    cash: 0,
    wave: 0,
    orange: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateBalances = useCallback(
    async (transaction) => {
      try {
        setIsLoading(true);
        const newBalances = { ...balances };

        switch (transaction.type) {
          case "Wave Dépôt":
            newBalances.cash += transaction.amount;
            newBalances.wave -= transaction.amount;
            break;
          case "Wave Retrait":
            newBalances.cash -= transaction.amount;
            newBalances.wave += transaction.amount;
            break;
          case "Orange Dépôt":
            newBalances.cash += transaction.amount;
            newBalances.orange -= transaction.amount;
            break;
          case "Orange Retrait":
            newBalances.cash -= transaction.amount;
            newBalances.orange += transaction.amount;
            break;
          default:
            newBalances.cash += transaction.amount;
        }

        await balanceService.update(newBalances);
        setBalances(newBalances);
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [balances]
  );

  return {
    balances,
    isLoading,
    error,
    updateBalances,
  };
};
