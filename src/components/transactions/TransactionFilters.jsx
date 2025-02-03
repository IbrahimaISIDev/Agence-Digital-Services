// components/transactions/TransactionFilters.jsx
import { Card, CardContent } from "../ui/Card";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export const TransactionFilters = ({ filters, onFilterChange, onReset }) => {
  const handleChange = (field, value) => {
    onFilterChange({ ...filters, [field]: value });
  };

  return (
    <Card>
      <CardContent className="pt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Type</label>
            <select
              className="w-full p-2 border rounded"
              value={filters.type}
              onChange={(e) => handleChange('type', e.target.value)}
            >
              <option value="">Tous les types</option>
              <option value="Wave Dépôt">Wave Dépôt</option>
              <option value="Wave Retrait">Wave Retrait</option>
              <option value="Orange Dépôt">Orange Dépôt</option>
              <option value="Orange Retrait">Orange Retrait</option>
              <option value="Photocopie">Photocopie</option>
              <option value="Impression">Impression</option>
              <option value="Facture">Paiement Facture</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Montant Min</label>
            <Input
              type="number"
              value={filters.minAmount}
              onChange={(e) => handleChange('minAmount', e.target.value)}
              placeholder="Montant minimum"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Montant Max</label>
            <Input
              type="number"
              value={filters.maxAmount}
              onChange={(e) => handleChange('maxAmount', e.target.value)}
              placeholder="Montant maximum"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date Début</label>
            <Input
              type="date"
              value={filters.startDate}
              onChange={(e) => handleChange('startDate', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date Fin</label>
            <Input
              type="date"
              value={filters.endDate}
              onChange={(e) => handleChange('endDate', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Client</label>
            <Input
              value={filters.client}
              onChange={(e) => handleChange('client', e.target.value)}
              placeholder="Nom ou téléphone"
            />
          </div>

          <div className="flex items-end">
            <Button
              onClick={onReset}
              variant="outline"
              className="w-full"
            >
              Réinitialiser
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
