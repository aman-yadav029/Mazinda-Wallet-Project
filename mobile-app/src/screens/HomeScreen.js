import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { fetchWalletBalance, fetchTransactions } from '../services/api';

export default function HomeScreen({ navigation }) {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchWalletBalance().then((balance) => setBalance(balance));
    fetchTransactions().then((data) => setTransactions(data));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Balance: {balance}</Text>
      <Button title="View Transactions" onPress={() => navigation.navigate('Transactions')} />
      <Text>Transactions:</Text>
      {transactions.map((transaction, index) => (
        <View key={index}>
          <Text>{transaction.description}</Text>
          <Text>{transaction.amount}</Text>
        </View>
      ))}
    </View>
  );
}