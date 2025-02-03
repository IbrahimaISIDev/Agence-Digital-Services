// // views/StatisticsView.jsx
// import { TabsContent } from "../components/ui/tabs";
// import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
// import { BalanceCards } from '../components/balance/BalanceCards';
// import { TransactionChart } from '../components/charts/TransactionChart';
// import { TransactionPieChart } from '../components/charts/TransactionPieChart';

// export const StatisticsView = ({ 
//   balances,
//   transactions,
//   transactionsByType 
// }) => {
//   return (
//     <TabsContent value="stats">
//       <Card>
//         <CardHeader>
//           <CardTitle>Statistiques</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <BalanceCards balances={balances} />
//           <TransactionChart data={transactions} />
//           <TransactionPieChart data={transactionsByType} />
//         </CardContent>
//       </Card>
//     </TabsContent>
//   );
// };

// StatisticsView.jsx
import React, { useMemo } from 'react';
import { TabsContent } from "../components/ui/Tabs";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatters } from '../utils/formatters';

export const StatisticsView = ({ balances, transactions, transactionsByType }) => {
  // Calcul des statistiques
  const stats = useMemo(() => {
    const today = new Date();
    const thirtyDaysAgo = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
    
    return {
      totalTransactions: transactions.length,
      totalAmount: transactions.reduce((sum, t) => sum + t.amount, 0),
      totalCommissions: transactions.reduce((sum, t) => sum + (t.commission || 0), 0),
      monthlyTransactions: transactions.filter(t => 
        new Date(t.timestamp) > thirtyDaysAgo
      ).length,
      averageTransaction: transactions.length > 0 
        ? transactions.reduce((sum, t) => sum + t.amount, 0) / transactions.length 
        : 0,
    };
  }, [transactions]);

  // Données pour le graphique des tendances journalières
  const dailyTrends = useMemo(() => {
    const last7Days = new Array(7).fill(0).map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date.toISOString().split('T')[0];
    }).reverse();

    return last7Days.map(date => {
      const dayTransactions = transactions.filter(t => 
        t.timestamp.startsWith(date)
      );

      return {
        date,
        amount: dayTransactions.reduce((sum, t) => sum + t.amount, 0),
        count: dayTransactions.length
      };
    });
  }, [transactions]);

  return (
    <TabsContent value="stats" className="space-y-6">
      {/* Soldes */}
      <div className="grid grid-cols-3 gap-4">
        {balances.map(({ label, amount }) => (
          <Card key={label}>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{formatters.formatAmount(amount)}</div>
              <p className="text-muted-foreground">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistiques générales */}
      <Card>
        <CardHeader>
          <CardTitle>Aperçu des Performances</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium">Total Transactions</p>
            <h3 className="text-2xl font-bold">{stats.totalTransactions}</h3>
          </div>
          <div>
            <p className="text-sm font-medium">Montant Total</p>
            <h3 className="text-2xl font-bold">{formatters.formatAmount(stats.totalAmount)}</h3>
          </div>
          <div>
            <p className="text-sm font-medium">Total Commissions</p>
            <h3 className="text-2xl font-bold">{formatters.formatAmount(stats.totalCommissions)}</h3>
          </div>
          <div>
            <p className="text-sm font-medium">Transaction Moyenne</p>
            <h3 className="text-2xl font-bold">{formatters.formatAmount(stats.averageTransaction)}</h3>
          </div>
        </CardContent>
      </Card>

      {/* Graphique des tendances */}
      <Card>
        <CardHeader>
          <CardTitle>Tendances des 7 derniers jours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="amount" name="Montant" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="count" name="Nombre" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Répartition par type */}
      <Card>
        <CardHeader>
          <CardTitle>Répartition par Type de Transaction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={transactionsByType}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};