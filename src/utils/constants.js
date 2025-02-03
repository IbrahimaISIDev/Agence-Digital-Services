// utils/constants.js
export const TRANSACTION_TYPES = {
    WAVE_DEPOT: 'Wave Dépôt',
    WAVE_RETRAIT: 'Wave Retrait',
    ORANGE_DEPOT: 'Orange Dépôt',
    ORANGE_RETRAIT: 'Orange Retrait',
    PHOTOCOPIE: 'Photocopie',
    IMPRESSION: 'Impression',
    FACTURE: 'Paiement Facture',
  };
  
  export const ALERT_THRESHOLDS = {
    CASH_MIN: 50000,
    CASH_MAX: 1000000,
    WAVE_MIN: 100000,
    ORANGE_MIN: 100000,
  };
  
  export const TRANSACTION_STATUS = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled',
    FAILED: 'failed',
  };
  
  export const USER_ROLES = {
    ADMIN: 'admin',
    MANAGER: 'manager',
    OPERATOR: 'operator',
  };
  
  export const PAGINATION = {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100,
  };
  
  export const DATE_FORMATS = {
    DISPLAY: 'DD/MM/YYYY',
    API: 'YYYY-MM-DD',
    DATETIME: 'DD/MM/YYYY HH:mm',
  };
  
  export const CURRENCY = {
    CODE: 'XOF',
    SYMBOL: 'FCFA',
    DECIMAL_PLACES: 0,
  };
  
  export const API_ENDPOINTS = {
    AUTH: '/auth',
    TRANSACTIONS: '/transactions',
    CLIENTS: '/clients',
    BALANCES: '/balances',
    REPORTS: '/reports',
  };
  
  export const ERROR_MESSAGES = {
    NETWORK_ERROR: 'Erreur de connexion au serveur',
    UNAUTHORIZED: 'Session expirée, veuillez vous reconnecter',
    FORBIDDEN: "Vous n'avez pas les permissions nécessaires",
    NOT_FOUND: 'Ressource non trouvée',
    VALIDATION_ERROR: 'Données invalides',
    DEFAULT: 'Une erreur est survenue',
  };
  
  export const SUCCESS_MESSAGES = {
    TRANSACTION_CREATED: 'Transaction créée avec succès',
    TRANSACTION_UPDATED: 'Transaction mise à jour avec succès',
    TRANSACTION_CANCELLED: 'Transaction annulée avec succès',
    CLIENT_CREATED: 'Client créé avec succès',
    CLIENT_UPDATED: 'Client mis à jour avec succès',
    BALANCE_UPDATED: 'Soldes mis à jour avec succès',
  };