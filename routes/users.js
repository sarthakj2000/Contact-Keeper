const express = require('express');
const router = express.Router();

// @route   Post api/users
//desc      Register a user
//acces     public
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
