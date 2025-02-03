// src/routes/index.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { TransactionsView } from '../views/TransactionsView';
import { StatisticsView } from '../views/StatisticsView';
import { ClientsView } from '../views/ClientsView';
import { ExpensesView } from '../views/ExpensesView';
import { ReportsView } from '../views/ReportsView';
import { LoginView } from '../views/LoginView';
import { ProtectedRoute } from './ProtectedRoute';
import { ROUTES } from './paths';

export const router = createBrowserRouter([
    {
        path: ROUTES.LOGIN,
        element: <LoginView />,
    },
    {
        path: '/',
        element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>,
        children: [
            { path: ROUTES.TRANSACTIONS, element: <TransactionsView /> },
            { path: ROUTES.STATISTICS, element: <StatisticsView /> },
            { path: ROUTES.CLIENTS, element: <ClientsView /> },
            { path: ROUTES.REPORTS, element: <ReportsView /> },
            { path: ROUTES.EXPENSES, element: <ExpensesView /> },
            { path: '*', element: <Navigate to={ROUTES.TRANSACTIONS} replace /> }
        ]
    }
]);