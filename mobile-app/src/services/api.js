// import axios from 'axios';

// const BASE_URL = 'http://localhost:3001';  // Change to your backend URL

// export const fetchWalletBalance = async () => {
//   try {
//     const response = await axios.get(${BASE_URL}/wallets/1/balance);
//     return response.data.balance;
//   } catch (error) {
//     console.error('Error fetching wallet balance', error);
//     throw error;
//   }
// };

// export const fetchTransactions = async () => {
//   try {
//     const response = await axios.get(${BASE_URL}/transactions/1);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching transactions', error);
//     throw error;
//   }
// };

// export const loginUser = async (email, password) => {
//   try {
//     const response = await axios.post(${BASE_URL}/auth/login, { email, password });
//     return response.data.token;
//   } catch (error) {
//     console.error('Login failed', error);
//     throw error;
//   }
// };


export const fetchUsers = async () => {
  const response = await fetch('http://localhost:3001/users');
  const data = await response.json();
  return data;
};

export const updateUserStatus = async (userId, status) => {
  const response = await fetch(http://localhost:3001/users/${userId}, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isActive: status }),
  });
  const data = await response.json();
  return data;
};