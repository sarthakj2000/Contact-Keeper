const express = require('express');
const router = express.Router();

// @route   Get api/contacts
//desc      get all user contacts
//acces     private
router.get('/', (req, res) => {
  res.send('Get all contacts');
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
