// hooks/useClients.js
import { useState, useCallback } from "react";
import { clientService } from "../services/clientService";

export const useClients = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateClientHistory = useCallback(
    async (transaction) => {
      try {
        setIsLoading(true);
        if (!transaction.clientPhone) return;

        const existingClient = clients.find(
          (c) => c.phone === transaction.clientPhone
        );

        if (existingClient) {
          const updatedClient = {
            ...existingClient,
            transactions: [...existingClient.transactions, transaction],
            totalAmount: existingClient.totalAmount + transaction.amount,
          };
          await clientService.update(updatedClient);
          setClients((prev) =>
            prev.map((c) =>
              c.phone === transaction.clientPhone ? updatedClient : c
            )
          );
        } else {
          const newClient = {
            phone: transaction.clientPhone,
            name: transaction.clientName,
            transactions: [transaction],
            totalAmount: transaction.amount,
            firstTransaction: new Date(),
          };
          await clientService.create(newClient);
          setClients((prev) => [...prev, newClient]);
        }
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [clients]
  );

  const getLoyalCustomers = useCallback(() => {
    return clients
      .filter((c) => c.transactions.length > 5)
      .sort((a, b) => b.totalAmount - a.totalAmount)
      .slice(0, 10);
  }, [clients]);

  return {
    clients,
    isLoading,
    error,
    updateClientHistory,
    getLoyalCustomers,
  };
};
