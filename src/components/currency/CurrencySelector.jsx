// components/currency/CurrencySelector.jsx
import { useCurrency } from '../../contexts/CurrencyContext';

export const CurrencySelector = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <select
      className="p-2 border rounded"
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
    >
      <option value="XOF">FCFA</option>
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
    </select>
  );
};