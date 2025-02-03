// views/ExpensesView.jsx
import { useState } from 'react';
import { TabsContent } from "../components/ui/Tabs";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export const ExpensesView = ({ expenses, onAddExpense }) => {
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    category: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(newExpense);
    setNewExpense({ description: '', amount: '', category: '' });
  };

  return (
    <TabsContent value="expenses">
      <Card>
        <CardHeader>
          <CardTitle>Nouvelle Dépense</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <select
              className="w-full p-2 border rounded"
              value={newExpense.category}
              onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
              required
            >
              <option value="">Sélectionner catégorie</option>
              <option value="Fournitures">Fournitures</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Salaires">Salaires</option>
              <option value="Loyer">Loyer</option>
              <option value="Autres">Autres</option>
            </select>

            <Input
              placeholder="Description"
              value={newExpense.description}
              onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
              required
            />

            <Input
              type="number"
              placeholder="Montant"
              value={newExpense.amount}
              onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
              required
            />

            <Button type="submit">Ajouter Dépense</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Historique des Dépenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {expenses.map((expense) => (
              <div key={expense.id} className="p-3 border rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">{expense.description}</span>
                    <span className="ml-2 text-sm text-gray-500">{expense.category}</span>
                  </div>
                  <span className="font-medium text-red-600">
                    -{expense.amount.toLocaleString()} FCFA
                  </span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {new Date(expense.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};