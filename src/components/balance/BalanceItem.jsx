// components/balance/BalanceItem.jsx
import { Card, CardContent } from "../ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

export const BalanceItem = ({ 
  label, 
  amount, 
  previousAmount,
  currency = "FCFA",
  icon: Icon 
}) => {
  const difference = amount - (previousAmount || 0);
  const percentChange = previousAmount 
    ? ((difference / previousAmount) * 100).toFixed(1) 
    : 0;

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="h-5 w-5 text-gray-500" />}
            <h3 className="text-sm font-medium text-gray-600">{label}</h3>
          </div>
          {difference !== 0 && (
            <div className={`flex items-center space-x-1 ${difference > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {difference > 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              <span className="text-sm">{Math.abs(percentChange)}%</span>
            </div>
          )}
        </div>
        <div className="mt-2">
          <span className="text-2xl font-bold">
            {amount.toLocaleString()} {currency}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};