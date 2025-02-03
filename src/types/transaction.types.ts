export type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
    type: "credit" | "debit";
  };
  
  // Ensure this file is treated as a module
  export {};
  