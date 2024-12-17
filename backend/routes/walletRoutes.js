const express = require('express');
const { getWalletBalance, updateWalletBalance } = require('../controllers/walletController');
const router = express.Router();

// Get wallet balance by user ID
router.get('/:userId/balance', getWalletBalance);

// Update wallet balance (transaction)
router.post('/:walletId/transaction', updateWalletBalance);

module.exports = router;