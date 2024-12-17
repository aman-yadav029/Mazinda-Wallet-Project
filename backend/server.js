const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const walletRoutes = require('./routes/walletRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/wallets', walletRoutes);
app.use('/transactions', transactionRoutes);

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});