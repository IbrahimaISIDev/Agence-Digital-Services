// views/ClientsView.jsx
// import { TabsContent } from "@/components/ui/tabs";
// import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

// export const ClientsView = ({ loyalCustomers }) => {
//   return (
//     <TabsContent value="clients">
//       <Card>
//         <CardHeader>
//           <CardTitle>Clients Fidèles</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             {loyalCustomers.map(client => (
//               <Card key={client.phone}>
//                 <CardContent className="pt-4">
//                   <h3 className="font-medium">{client.name}</h3>
//                   <p className="text-sm text-gray-600">{client.phone}</p>
//                   <p>Total transactions: {client.transactions.length}</p>
//                   <p>Montant total: {client.totalAmount.toLocaleString()} FCFA</p>
//                   <p>Client depuis: {new Date(client.firstTransaction).toLocaleDateString()}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </TabsContent>
//   );
// };

// views/ClientsView.jsx
import { useState } from 'react';
import { TabsContent } from "../components/ui/Tabs";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer 
} from 'recharts';

export const ClientsView = ({ clients, getLoyalCustomers }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const loyalCustomers = getLoyalCustomers();

  const filteredClients = clients.filter(client => 
    client.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.phone?.includes(searchQuery)
  );

  return (
    <TabsContent value="clients">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Clients Fidèles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {loyalCustomers.map(client => (
              <Card key={client.phone}>
                <CardContent className="pt-4">
                  <h3 className="font-medium">{client.name}</h3>
                  <p className="text-sm text-gray-600">{client.phone}</p>
                  <p>Total transactions: {client.transactions.length}</p>
                  <p>Montant total: {client.totalAmount.toLocaleString()} FCFA</p>
                  <p>Client depuis: {new Date(client.firstTransaction).toLocaleDateString()}</p>
                  <div className="h-32 mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={client.transactions}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="timestamp" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Rechercher des Clients</span>
            <Input
              className="w-64"
              placeholder="Nom ou numéro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredClients.map(client => (
              <Card key={client.phone}>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{client.name}</h3>
                      <p className="text-sm text-gray-600">{client.phone}</p>
                    </div>
                    <div className="text-right">
                      <p>{client.transactions.length} transactions</p>
                      <p className="font-medium">{client.totalAmount.toLocaleString()} FCFA</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Dernières Transactions</h4>
                    {client.transactions.slice(-3).map(transaction => (
                      <div key={transaction.id} className="text-sm text-gray-600">
                        {new Date(transaction.timestamp).toLocaleDateString()} - {transaction.type} - {transaction.amount.toLocaleString()} FCFA
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
