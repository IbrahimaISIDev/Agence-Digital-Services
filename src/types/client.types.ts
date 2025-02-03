import { Transaction } from "../types/transaction.types";
export type Client = {
    name: string;
    phone: string;
    transactions: Transaction[];
    totalAmount: number;
    firstTransaction: string;
  };
  
  // Ensure this file is treated as a module
  export {};
  