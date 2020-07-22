const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   Get api/contacts
//desc      get all user contacts
//acces     private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
// @route   Post api/contacts
//desc      add new contact contact
//acces     private
router.post('/', (req, res) => {
  res.send('Add contact');
});
// @route   Put api/contacts/:id
//desc      update contact
//acces     private
router.put('/:id', (req, res) => {
  res.send('update contact');
});

// @route   Delete api/contacts/:id
//desc      delete contact
//acces     private
router.delete('/:id', (req, res) => {
  res.send('delete contact');
});

module.exports = router;
