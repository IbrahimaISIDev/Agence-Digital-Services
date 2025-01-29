// services/api.js
const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

export const api = {
  async get(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  },

  async post(endpoint, data) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  },

  async put(endpoint, data) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  },

  async delete(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  },
};
