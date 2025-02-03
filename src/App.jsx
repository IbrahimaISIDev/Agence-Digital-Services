// import { useState, useEffect } from 'react';
// import { DashboardLayout } from './components/layout/DashboardLayout';
// import { AlertsList } from './components/alerts/AlertsList';
// import { TransactionsView } from './views/TransactionsView';
// import { StatisticsView } from './views/StatisticsView';
// import { ClientsView } from './views/ClientsView';
// import { useTransactions } from './hooks/useTransactions';
// import { useClients } from './hooks/useClients';
// import { useBalances } from './hooks/useBalances';
// import { checkAlerts } from './utils/alerts';
// import { ExpensesView } from './views/ExpensesView';
// import { useExpenses } from './hooks/useExpenses';
// import { useReports } from './hooks/useReports';
// import { DailyReport } from './components/reports/DailyReport';

// const TABS = [
//     { value: 'transactions', label: 'Transactions' },
//     { value: 'stats', label: 'Statistiques' },
//     { value: 'clients', label: 'Clients' },
//     { value: 'reports', label: 'Rapports' },
//     { value: 'expenses', label: 'Dépenses' }
// ];

// export default function App() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [alerts, setAlerts] = useState([]);
//     // const [selectedTab, setSelectedTab] = useState(TABS[0].value);
//     // const [balances, setBalances] = useState({
//     //     cash: 0,
//     //     wave: 0,
//     //     orange: 0,
//     // });
//     // const [transactions, setTransactions] = useState([]);
//     // const [clients, setClients] = useState([]);

//     const {
//         transactions,
//         isLoading: transactionsLoading,
//         error: transactionsError,
//         addTransaction,
//         searchTransactions,
//         getTransactionsByDate
//     } = useTransactions();

//     const {
//         clients,
//         isLoading: clientsLoading,
//         error: clientsError,
//         updateClientHistory,
//         getLoyalCustomers
//     } = useClients();

//     const {
//         balances,
//         isLoading: balancesLoading,
//         error: balancesError,
//         updateBalances
//     } = useBalances();

//     // Vérifier les alertes à chaque changement de solde
//     useEffect(() => {
//         const newAlerts = checkAlerts(balances, []);  // Passer les dépenses une fois implémentées
//         setAlerts(newAlerts);
//     }, [balances]);

//     const {
//         expenses,
//         isLoading: expensesLoading,
//         error: expensesError,
//         addExpense,
//         getExpensesByDate,
//         getTotalExpenses
//     } = useExpenses();

//     const {
//         selectedDate,
//         setSelectedDate,
//         isLoading: reportsLoading,
//         error: reportsError,
//         generateDailyReport,
//         exportReport
//     } = useReports(transactions, expenses);

//     // Gérer une nouvelle dépense
//     const handleNewExpense = async (expense) => {
//         try {
//             const newExpense = await addExpense(expense);
//             await updateBalances({
//                 ...balances,
//                 cash: balances.cash - newExpense.amount
//             });
//         } catch (error) {
//             console.error('Error handling expense:', error);
//         }
//     };

//     // Gérer l'export du rapport
//     const handleExportReport = async (format) => {
//         try {
//             await exportReport(format);
//         } catch (error) {
//             console.error('Error exporting report:', error);
//         }
//     };

//     // Afficher les erreurs si nécessaire
//     if (transactionsError || clientsError || balancesError || expensesError || reportsError) {
//         return (
//             <div className="p-4">
//                 <h1 className="text-2xl font-bold text-red-600">
//                     Une erreur est survenue
//                 </h1>
//                 <p>{transactionsError || clientsError || balancesError || expensesError || reportsError}</p>
//             </div>
//         );
//     }

//     // Afficher le chargement si nécessaire
//     if (transactionsLoading || clientsLoading || balancesLoading || expensesLoading || reportsLoading) {
//         return (
//             <div className="p-4">
//                 <h1 className="text-2xl font-bold">Chargement...</h1>
//             </div>
//         );
//     }

//     return (
//         <DashboardLayout tabs={TABS}>
//             <AlertsList alerts={alerts} />

//             <TransactionsView
//                 transactions={searchTransactions(searchQuery)}
//                 onAddTransaction={handleNewTransaction}
//                 searchQuery={searchQuery}
//                 onSearchChange={setSearchQuery}
//             />

//             <StatisticsView
//                 balances={[
//                     { label: 'Solde Cash', amount: balances.cash },
//                     { label: 'Solde Wave', amount: balances.wave },
//                     { label: 'Solde Orange', amount: balances.orange }
//                 ]}
//                 transactions={transactions}
//                 transactionsByType={Object.entries(
//                     transactions.reduce((acc, t) => {
//                         acc[t.type] = (acc[t.type] || 0) + 1;
//                         return acc;
//                     }, {})
//                 ).map(([name, value]) => ({ name, value }))}
//             />

//             <ClientsView loyalCustomers={getLoyalCustomers()} />

//             <TabsContent value="reports">
//                 <div className="flex items-center gap-4 mb-4">
//                     <Input
//                         type="date"
//                         value={selectedDate.toISOString().split('T')[0]}
//                         onChange={(e) => setSelectedDate(new Date(e.target.value))}
//                     />
//                 </div>
//                 <DailyReport
//                     report={generateDailyReport()}
//                     onExport={handleExportReport}
//                 />
//             </TabsContent>

//             <ExpensesView
//                 expenses={expenses}
//                 onAddExpense={handleNewExpense}
//             />
//         </DashboardLayout>
//     );
// }

// src/App.jsx
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from '../src/context/AuthContext';
import { router } from './routes';
import { Toaster } from './components/ui/Toaster';


export default function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </div>
  );
}
// export default function App() {
//   return (
//     <AuthProvider>
//       <RouterProvider router={router} />
//       <Toaster />
//     </AuthProvider>
//   );
// }