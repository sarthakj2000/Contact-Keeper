const express = require('express');
const router = express.Router();

// @route   Get api/auth
//desc      Get logged in user
//acces     private
router.get('/', (req, res) => {
  res.send('get logged in user');
});

// @route   Post api/auth
//desc      Auth user and get token
//acces     public
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;
