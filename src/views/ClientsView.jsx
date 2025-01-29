// views/ClientsView.jsx
import { TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const ClientsView = ({ loyalCustomers }) => {
  return (
    <TabsContent value="clients">
      <Card>
        <CardHeader>
          <CardTitle>Clients Fidèles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {loyalCustomers.map(client => (
              <Card key={client.phone}>
                <CardContent className="pt-4">
                  <h3 className="font-medium">{client.name}</h3>
                  <p className="text-sm text-gray-600">{client.phone}</p>
                  <p>Total transactions: {client.transactions.length}</p>
                  <p>Montant total: {client.totalAmount.toLocaleString()} FCFA</p>
                  <p>Client depuis: {new Date(client.firstTransaction).toLocaleDateString()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
