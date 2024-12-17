const express = require('express');
const { getTransactionsByWalletId } = require('../controllers/transactionController');
const router = express.Router();

// Get transactions by wallet ID
router.get('/:walletId', getTransactionsByWalletId);

module.exports = router;