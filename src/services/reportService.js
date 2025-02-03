// services/reportService.js
import { api } from './api';

class ReportService {
  async getDailyReport(date) {
    return api.get(`/reports/daily?date=${date}`);
  }

  async getMonthlyReport(month, year) {
    return api.get(`/reports/monthly?month=${month}&year=${year}`);
  }

  async getCustomReport(params) {
    const queryString = new URLSearchParams(params).toString();
    return api.get(`/reports/custom?${queryString}`);
  }

  async exportReport(params) {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${api.baseUrl}/reports/export?${queryString}`, {
      headers: api.getHeaders(),
    });
    
    if (!response.ok) {
      throw new Error("Erreur lors de l'exportation");
    }
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rapport-${new Date().toISOString()}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}

export const reportService = new ReportService();