const express = require('express');
const { register, login } = require('../controllers/authController');
const { auth, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

// Public Routes
router.post('/register', register);
router.post('/login', login);

// Protected Route (Example: Admin Only)
router.get('/admin', auth, authorize('Admin'), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

module.exports = router;
