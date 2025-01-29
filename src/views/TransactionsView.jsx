// views/TransactionsView.jsx
import { TransactionForm } from '../components/transactions/TransactionForm';
import { TransactionsList } from '../components/transactions/TransactionsList';
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const TransactionsView = ({ 
  transactions,
  onAddTransaction,
  searchQuery,
  onSearchChange 
}) => {
  return (
    <TabsContent value="transactions">
      <TransactionForm onSubmit={onAddTransaction} />
      
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Rechercher des Transactions</span>
            <Input
              className="w-64"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TransactionsList transactions={transactions} />
        </CardContent>
      </Card>
    </TabsContent>
  );
};
