// components/clients/ClientCard.jsx
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Phone, Calendar, CreditCard } from "lucide-react";

export const ClientCard = ({ client }) => {
  const { name, phone, transactions, totalAmount, firstTransaction } = client;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{phone}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <CreditCard className="h-4 w-4 text-gray-500" />
            <div>
              <p className="text-sm text-gray-600">
                {transactions.length} transactions
              </p>
              <p className="font-medium">
                {totalAmount.toLocaleString()} FCFA
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <div>
              <p className="text-sm text-gray-600">Client depuis</p>
              <p className="font-medium">
                {new Date(firstTransaction).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};