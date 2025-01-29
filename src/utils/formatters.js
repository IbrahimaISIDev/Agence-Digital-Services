// utils/formatters.js
export const formatters = {
  formatAmount: (amount) => {
    return amount.toLocaleString("fr-FR") + " FCFA";
  },

  formatDate: (date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  },

  formatPhoneNumber: (phone) => {
    return phone.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
  },
};
