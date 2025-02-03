// components/transactions/TransactionItem.jsx
import React from 'react';
import { MoreVertical, User, Phone, Calendar, CreditCard } from 'lucide-react';
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const TransactionItem = ({ 
  transaction,
  onEdit,
  onDelete,
  onViewDetails
}) => {
  const getStatusColor = () => {
    switch (transaction.type) {
      case 'Wave Dépôt':
      case 'Orange Dépôt':
        return 'bg-green-100 text-green-800';
      case 'Wave Retrait':
      case 'Orange Retrait':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
            {transaction.type}
          </div>
          <span className="font-bold">
            {transaction.amount.toLocaleString()} FCFA
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => onViewDetails(transaction)}>
              Voir détails
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onEdit(transaction)}>
              Modifier
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onDelete(transaction)}
              className="text-red-600"
            >
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-500">
        {transaction.clientName && (
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {transaction.clientName}
          </div>
        )}
        {transaction.clientPhone && (
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            {transaction.clientPhone}
          </div>
        )}
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {new Date(transaction.timestamp).toLocaleString()}
        </div>
        {transaction.commission > 0 && (
          <div className="flex items-center gap-1">
            <CreditCard className="w-4 h-4" />
            Commission: {transaction.commission.toLocaleString()} FCFA
          </div>
        )}
      </div>

      {transaction.description && (
        <p className="mt-2 text-sm text-gray-600">
          {transaction.description}
        </p>
      )}
    </div>
  );
};
