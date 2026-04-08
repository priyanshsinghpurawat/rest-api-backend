const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/login', (req, res) => {
  // Login logic here
});

module.exports = router;