const express = require('express');
const { getUserById, updateUserStatus } = require('../controllers/userController');
const router = express.Router();

// Get user by ID
router.get('/:id', getUserById);

// Update user status (active/inactive)
router.patch('/:id', updateUserStatus);

module.exports = router;