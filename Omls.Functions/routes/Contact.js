const express = require('express');
const {Contact} = require('../models');
const contactRouter = express.Router();

contactRouter.get('/', async(req,res) => {
  const contactedUs = await Contact.findAll();
  console.log(res)
  res.json(contactedUs)
})

contactRouter.post('/',async(req, res) => {
  const contact = req.body;
  await Contact.create(contact);
  res.json(contact)
})

module.exports = contactRouter;