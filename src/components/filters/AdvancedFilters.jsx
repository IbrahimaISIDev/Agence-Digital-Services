// components/filters/AdvancedFilters.jsx
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const AdvancedFilters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    type: '',
    minAmount: '',
    maxAmount: '',
    clientPhone: '',
    clientName: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    setFilters({
      dateFrom: '',
      dateTo: '',
      type: '',
      minAmount: '',
      maxAmount: '',
      clientPhone: '',
      clientName: ''
    });
    onFilter({});
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filtres avancés</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Date début</label>
              <Input
                type="date"
                value={filters.dateFrom}
                onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Date fin</label>
              <Input
                type="date"
                value={filters.dateTo}
                onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Type de transaction</label>
            <select
              className="w-full p-2 border rounded"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">Tous</option>
              <option value="Wave Dépôt">Wave Dépôt</option>
              <option value="Wave Retrait">Wave Retrait</option>
              <option value="Orange Dépôt">Orange Dépôt</option>
              <option value="Orange Retrait">Orange Retrait</option>
              <option value="Photocopie">Photocopie</option>
              <option value="Impression">Impression</option>
              <option value="Facture">Paiement Facture</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Montant min</label>
              <Input
                type="number"
                value={filters.minAmount}
                onChange={(e) => setFilters({ ...filters, minAmount: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Montant max</label>
              <Input
                type="number"
                value={filters.maxAmount}
                onChange={(e) => setFilters({ ...filters, maxAmount: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Téléphone client</label>
              <Input
                value={filters.clientPhone}
                onChange={(e) => setFilters({ ...filters, clientPhone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Nom client</label>
              <Input
                value={filters.clientName}
                onChange={(e) => setFilters({ ...filters, clientName: e.target.value })}
              />
            </div>
          </div>

          <div className="flex space-x-2">
            <Button type="submit">
              Appliquer les filtres
            </Button>
            <Button type="button" variant="outline" onClick={handleReset}>
              Réinitialiser
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};