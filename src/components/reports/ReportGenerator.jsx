// components/reports/ReportGenerator.jsx
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { LoadingSpinner } from '../ui/LoadingSpinner';

export const ReportGenerator = ({ onGenerate, isLoading = false }) => {
  const [dateRange, setDateRange] = useState({
    start: new Date().toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0]
  });
  const [reportType, setReportType] = useState('daily');

  const handleGenerate = () => {
    onGenerate({
      dateRange,
      reportType,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Générer un Rapport
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Date de début</label>
              <Input
                type="date"
                value={dateRange.start}
                onChange={(e) => setDateRange(prev => ({
                  ...prev,
                  start: e.target.value
                }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Date de fin</label>
              <Input
                type="date"
                value={dateRange.end}
                onChange={(e) => setDateRange(prev => ({
                  ...prev,
                  end: e.target.value
                }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Type de rapport</label>
            <select
              className="w-full p-2 border rounded-md"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="daily">Journalier</option>
              <option value="weekly">Hebdomadaire</option>
              <option value="monthly">Mensuel</option>
            </select>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <LoadingSpinner size="small" className="mr-2" />
            ) : null}
            Générer le rapport
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};