// contexts/CurrencyContext.jsx
import React, { createContext, useState, useContext } from 'react';

const CurrencyContext = createContext(null);

const EXCHANGE_RATES = {
    'XOF': 1,
    'EUR': 0.00152, // 1 FCFA = 0.00152 EUR
    'USD': 0.00166, // 1 FCFA = 0.00166 USD
};

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState('XOF');

    const convert = (amount, from = 'XOF', to = currency) => {
        const inXOF = amount / EXCHANGE_RATES[from];
        return inXOF * EXCHANGE_RATES[to];
    };

    const format = (amount, curr = currency) => {
        const converted = convert(amount, 'XOF', curr);
        const formatter = new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: curr,
        });
        return formatter.format(converted);
    };

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, convert, format }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => useContext(CurrencyContext);