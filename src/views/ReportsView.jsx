// views/ReportsView.jsx
import { useState } from 'react';
import { TabsContent } from "../components/ui/Tabs";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Calendar } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer 
} from 'recharts';

export const ReportsView = ({
  transactions,
  expenses,
  getTransactionsByDate,
  generateDailyReport
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateRange, setDateRange] = useState({
    start: new Date().toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0]
  });

  const dailyReport = generateDailyReport(selectedDate);

  const handleExport = () => {
    // Logique d'export à implémenter
    console.log('Exporting report...');
  };

  return (
    <TabsContent value="reports">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Rapport Journalier</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar className="mr-2" />
                <Input
                  type="date"
                  value={selectedDate.toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                />
              </div>
              <Button onClick={handleExport}>Exporter</Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="pt-4">
                <h3 className="font-medium">Transactions</h3>
                <p className="text-2xl font-bold">{dailyReport.totalTransactions}</p>
                <p className="text-sm text-gray-500">Total: {dailyReport.totalAmount.toLocaleString()} FCFA</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <h3 className="font-medium">Commissions</h3>
                <p className="text-2xl font-bold">{dailyReport.totalCommissions.toLocaleString()} FCFA</p>
                <p className="text-sm text-gray-500">Moyenne: {(dailyReport.totalCommissions / dailyReport.totalTransactions || 0).toLocaleString()} FCFA</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Répartition par Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={Object.entries(dailyReport.byType).map(([name, value]) => ({ name, value }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Détails des Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {getTransactionsByDate(selectedDate).map((transaction) => (
                  <div key={transaction.id} className="p-2 border rounded">
                    <div className="flex justify-between">
                      <span className="font-medium">{transaction.type}</span>
                      <span>{transaction.amount.toLocaleString()} FCFA</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span>Commission: {transaction.commission} FCFA</span>
                      <span className="ml-4">{new Date(transaction.timestamp).toLocaleTimeString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </TabsContent>
  );
};