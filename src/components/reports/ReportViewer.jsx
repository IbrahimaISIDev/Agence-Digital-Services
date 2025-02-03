// components/reports/ReportViewer.jsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Download, Printer } from 'lucide-react';
import { TransactionChart } from '../charts/TransactionChart';
import { TransactionPieChart } from '../charts/TransactionPieChart';

export const ReportViewer = ({ report, onDownload, onPrint }) => {
  if (!report) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Rapport du {report.date}</span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onDownload}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Télécharger
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onPrint}
              className="flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              Imprimer
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Résumé */}
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-4">
                <h3 className="font-medium">Total Transactions</h3>
                <p className="text-2xl font-bold">{report.totalTransactions}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <h3 className="font-medium">Montant Total</h3>
                <p className="text-2xl font-bold">
                  {report.totalAmount.toLocaleString()} FCFA
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <h3 className="font-medium">Total Commissions</h3>
                <p className="text-2xl font-bold">
                  {report.totalCommissions.toLocaleString()} FCFA
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Graphiques */}
          <div className="space-y-4">
            <h3 className="font-medium">Évolution des transactions</h3>
            <TransactionChart data={report.transactions} />
            
            <h3 className="font-medium">Répartition par type</h3>
            <TransactionPieChart 
              data={Object.entries(report.byType).map(([name, value]) => ({
                name,
                value
              }))}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};