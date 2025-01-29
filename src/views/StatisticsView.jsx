// views/StatisticsView.jsx
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BalanceCards } from '../components/balance/BalanceCards';
import { TransactionChart } from '../components/charts/TransactionChart';
import { TransactionPieChart } from '../components/charts/TransactionPieChart';

export const StatisticsView = ({ 
  balances,
  transactions,
  transactionsByType 
}) => {
  return (
    <TabsContent value="stats">
      <Card>
        <CardHeader>
          <CardTitle>Statistiques</CardTitle>
        </CardHeader>
        <CardContent>
          <BalanceCards balances={balances} />
          <TransactionChart data={transactions} />
          <TransactionPieChart data={transactionsByType} />
        </CardContent>
      </Card>
    </TabsContent>
  );
};
