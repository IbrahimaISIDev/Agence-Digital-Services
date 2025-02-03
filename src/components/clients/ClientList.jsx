// components/clients/ClientList.jsx
import { useState } from 'react';
import { ClientCard } from './ClientCard';
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export const ClientList = ({ clients }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          className="pl-10"
          placeholder="Rechercher un client..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredClients.map(client => (
          <ClientCard key={client.phone} client={client} />
        ))}
      </div>
      
      {filteredClients.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucun client trouvé
        </div>
      )}
    </div>
  );
};