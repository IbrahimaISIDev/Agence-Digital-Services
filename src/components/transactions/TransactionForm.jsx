// components/transactions/TransactionForm.jsx
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const TransactionForm = ({ onSubmit }) => {
  const [transaction, setTransaction] = useState({
    type: '',
    amount: '',
    commission: '',
    description: '',
    clientPhone: '',
    clientName: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(transaction);
    setTransaction({
      type: '',
      amount: '',
      commission: '',
      description: '',
      clientPhone: '',
      clientName: ''
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nouvelle Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <select 
            className="p-2 border rounded"
            value={transaction.type}
            onChange={(e) => setTransaction({...transaction, type: e.target.value})}
            required
          >
            <option value="">Sélectionner type</option>
            <option value="Wave Dépôt">Wave Dépôt</option>
            <option value="Wave Retrait">Wave Retrait</option>
            <option value="Orange Dépôt">Orange Dépôt</option>
            <option value="Orange Retrait">Orange Retrait</option>
            <option value="Photocopie">Photocopie</option>
            <option value="Impression">Impression</option>
            <option value="Facture">Paiement Facture</option>
          </select>
          
          <Input
            type="number"
            placeholder="Montant"
            value={transaction.amount}
            onChange={(e) => setTransaction({...transaction, amount: e.target.value})}
            required
          />
          
          <Input
            type="number"
            placeholder="Commission"
            value={transaction.commission}
            onChange={(e) => setTransaction({...transaction, commission: e.target.value})}
          />

          <Input
            placeholder="Numéro client"
            value={transaction.clientPhone}
            onChange={(e) => setTransaction({...transaction, clientPhone: e.target.value})}
          />

          <Input
            placeholder="Nom client"
            value={transaction.clientName}
            onChange={(e) => setTransaction({...transaction, clientName: e.target.value})}
          />
          
          <Input
            placeholder="Description"
            value={transaction.description}
            onChange={(e) => setTransaction({...transaction, description: e.target.value})}
          />
          
          <Button type="submit">
            Ajouter Transaction
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};