// components/transactions/TransactionsList.jsx
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";

export const TransactionsList = ({ transactions }) => {
  return (
    <div className="space-y-2">
      {transactions.map(transaction => (
        <div key={transaction.id} className="p-2 border rounded">
          <div className="flex justify-between">
            <span className="font-medium">{transaction.type}</span>
            <span>{transaction.amount.toLocaleString()} FCFA</span>
          </div>
          <div className="text-sm text-gray-600">
            <span>Commission: {transaction.commission} FCFA</span>
            <span className="ml-4">{transaction.timestamp}</span>
          </div>
          {transaction.clientName && (
            <div className="text-sm text-gray-500">
              Client: {transaction.clientName} ({transaction.clientPhone})
            </div>
          )}
          {transaction.description && (
            <div className="text-sm text-gray-500">{transaction.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};