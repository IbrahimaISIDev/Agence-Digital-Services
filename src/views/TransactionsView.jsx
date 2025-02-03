// views/TransactionsView.jsx
import { TransactionForm } from '../components/transactions/TransactionForm';
import { TransactionsList } from '../components/transactions/TransactionList';
import { TransactionFilters } from '../components/transactions/TransactionFilters';
import { Pagination } from '../components/pagination/Pagination';
import { TabsContent } from "../components/ui/Tabs";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { usePagination } from '../hooks/usePagination';
import { useTransactionFilters } from '../hooks/useTransactionFilters';

export const TransactionsView = ({
  transactions,
  onAddTransaction
}) => {
  // Utilisation des hooks personnalisés
  const {
    filters,
    filteredTransactions,
    handleFilterChange,
    resetFilters
  } = useTransactionFilters(transactions);

  const {
    currentPage,
    totalPages,
    pageSize,
    paginatedItems,
    handlePageChange,
    handlePageSizeChange
  } = usePagination(filteredTransactions);

  return (
    <TabsContent value="transactions">
      <div className="space-y-4">
        <TransactionForm onSubmit={onAddTransaction} />

        <TransactionFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={resetFilters}
        />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Transactions</span>
              <span className="text-sm text-gray-500">
                {filteredTransactions.length} transactions trouvées
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionsList transactions={paginatedItems} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
            />
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};

// // TransactionsView.jsx
// import React, { useState } from 'react';
// import { TabsContent } from "../components/ui/tabs";
// import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
// import { Input } from "../components/ui/input";
// import { Button } from "../components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "../components/ui/dialog";
// import { formatters } from '../utils/formatters';
// import { validation } from '../utils/validation';

// export const TransactionsView = ({
//   transactions,
//   onAddTransaction,
//   searchQuery,
//   onSearchChange
// }) => {
//   const [newTransaction, setNewTransaction] = useState({
//     type: '',
//     amount: '',
//     commission: '',
//     description: '',
//     clientPhone: '',
//     clientName: ''
//   });
//   const [errors, setErrors] = useState({});

//   const validateTransaction = () => {
//     const newErrors = {};

//     if (!newTransaction.type) {
//       newErrors.type = 'Le type est requis';
//     }

//     if (!newTransaction.amount || !validation.isValidAmount(Number(newTransaction.amount))) {
//       newErrors.amount = 'Montant invalide';
//     }

//     if (newTransaction.clientPhone && !validation.isValidPhoneNumber(newTransaction.clientPhone)) {
//       newErrors.clientPhone = 'Numéro de téléphone invalide';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateTransaction()) {
//       onAddTransaction(newTransaction);
//       setNewTransaction({
//         type: '',
//         amount: '',
//         commission: '',
//         description: '',
//         clientPhone: '',
//         clientName: ''
//       });
//     }
//   };

//   return (
//     <TabsContent value="transactions">
//       {/* Formulaire nouvelle transaction */}
//       <Card className="mb-6">
//         <CardHeader>
//           <CardTitle>Nouvelle Transaction</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <select
//                 className="w-full p-2 border rounded-md"
//                 value={newTransaction.type}
//                 onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
//               >
//                 <option value="">Sélectionner type</option>
//                 <option value="Wave Dépôt">Wave Dépôt</option>
//                 <option value="Wave Retrait">Wave Retrait</option>
//                 <option value="Orange Dépôt">Orange Dépôt</option>
//                 <option value="Orange Retrait">Orange Retrait</option>
//                 <option value="Photocopie">Photocopie</option>
//                 <option value="Impression">Impression</option>
//                 <option value="Facture">Paiement Facture</option>
//               </select>
//               {errors.type && <p className="text-sm text-red-500 mt-1">{errors.type}</p>}
//             </div>

//             <div>
//               <Input
//                 type="number"
//                 placeholder="Montant"
//                 value={newTransaction.amount}
//                 onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
//               />
//               {errors.amount && <p className="text-sm text-red-500 mt-1">{errors.amount}</p>}
//             </div>

//             <Input
//               type="number"
//               placeholder="Commission"
//               value={newTransaction.commission}
//               onChange={(e) => setNewTransaction({ ...newTransaction, commission: e.target.value })}
//             />

//             <div>
//               <Input
//                 placeholder="Numéro client"
//                 value={newTransaction.clientPhone}
//                 onChange={(e) => setNewTransaction({ ...newTransaction, clientPhone: e.target.value })}
//               />
//               {errors.clientPhone && <p className="text-sm text-red-500 mt-1">{errors.clientPhone}</p>}
//             </div>

//             <Input
//               placeholder="Nom client"
//               value={newTransaction.clientName}
//               onChange={(e) => setNewTransaction({ ...newTransaction, clientName: e.target.value })}
//             />

//             <Input
//               placeholder="Description"
//               value={newTransaction.description}
//               onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
//             />

//             <Button type="submit" className="w-full">
//               Ajouter Transaction
//             </Button>
//           </form>
//         </CardContent>
//       </Card>

//       {/* Liste des transactions */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center justify-between">
//             <span>Transactions</span>
//             <Input
//               className="w-64"
//               placeholder="Rechercher..."
//               value={searchQuery}
//               onChange={(e) => onSearchChange(e.target.value)}
//             />
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             {transactions.map((transaction) => (
//               <Dialog key={transaction.id}>
//                 <DialogTrigger asChild>
//                   <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="font-medium">{transaction.type}</span>
//                       <span className="font-bold">{formatters.formatAmount(transaction.amount)}</span>
//                     </div>
//                     <div className="text-sm text-gray-500">
//                       <span>Commission: {formatters.formatAmount(transaction.commission || 0)}</span>
//                       <span className="mx-2">•</span>
//                       <span>{new Date(transaction.timestamp).toLocaleString()}</span>
//                     </div>
//                     {transaction.clientName && (
//                       <div className="text-sm text-gray-500 mt-1">
//                         Client: {transaction.clientName} ({formatters.formatPhoneNumber(transaction.clientPhone)})
//                       </div>
//                     )}
//                   </div>
//                 </DialogTrigger>
//                 <DialogContent>
//                   <DialogHeader>
//                     <DialogTitle>Détails de la Transaction</DialogTitle>
//                   </DialogHeader>
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="font-medium">Type</h4>
//                       <p>{transaction.type}</p>
//                     </div>
//                     <div>
//                       <h4 className="font-medium">Montant</h4>
//                       <p>{formatters.formatAmount(transaction.amount)}</p>
//                     </div>
//                     <div>
//                       <h4 className="font-medium">Commission</h4>
//                       <p>{formatters.formatAmount(transaction.commission || 0)}</p>
//                     </div>
//                     <div>
//                       <h4 className="font-medium">Date</h4>
//                       <p>{new Date(transaction.timestamp).toLocaleString()}</p>
//                     </div>
//                     {transaction.clientName && (
//                       <>
//                         <div>
//                           <h4 className="font-medium">Client</h4>
//                           <p>{transaction.clientName}</p>
//                         </div>
//                         <div>
//                           <h4 className="font-medium">Téléphone</h4>
//                           <p>{formatters.formatPhoneNumber(transaction.clientPhone)}</p>
//                         </div>
//                       </>
//                     )}
//                     {transaction.description && (
//                       <div>
//                         <h4 className="font-medium">Description</h4>
//                         <p>{transaction.description}</p>
//                       </div>
//                     )}
//                   </div>
//                 </DialogContent>
//               </Dialog>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </TabsContent>
//   );
// };