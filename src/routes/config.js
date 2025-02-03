// src/routes/config.js
import { ROUTES } from './paths';

export const NAVIGATION_CONFIG = [
  { value: 'transactions', label: 'Transactions', path: ROUTES.TRANSACTIONS },
  { value: 'stats', label: 'Statistiques', path: ROUTES.STATISTICS },
  { value: 'clients', label: 'Clients', path: ROUTES.CLIENTS },
  { value: 'reports', label: 'Rapports', path: ROUTES.REPORTS },
  { value: 'expenses', label: 'Dépenses', path: ROUTES.EXPENSES }
];