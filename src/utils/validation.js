// utils/validation.js
export const validation = {
  isValidPhoneNumber: (phone) => {
    const phoneRegex = /^(7[0-9]{8})$/; // Format sénégalais
    return phoneRegex.test(phone);
  },

  isValidAmount: (amount) => {
    return amount > 0 && Number.isFinite(amount);
  },

  hasEnoughBalance: (balance, amount, type) => {
    return balance >= amount;
  },

  isValidTransaction: (transaction) => {
    return (
      transaction.type &&
      validation.isValidAmount(transaction.amount) &&
      (!transaction.clientPhone ||
        validation.isValidPhoneNumber(transaction.clientPhone))
    );
  },
};
