// components/balance/BalanceCards.jsx
import { Card, CardContent } from "../ui/card";

export const BalanceCards = ({ balances }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      {balances.map(({ label, amount }) => (
        <Card key={label}>
          <CardContent className="pt-4">
            <h3 className="font-medium">{label}</h3>
            <p className="text-2xl font-bold">{amount.toLocaleString()} FCFA</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};