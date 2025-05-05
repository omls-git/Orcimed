const express = require('express');
const {Contact} = require('../models');
const contactRouter = express.Router();
const sgMail = require('@sendgrid/mail');

contactRouter.get('/', async(req,res) => {
  const contactedUs = await Contact.findAll();
  console.log(res)
  res.json(contactedUs)
})
 
contactRouter.post('/', async (req, res) => {
  try {
    const contact = req.body;
 
    // Save to DB
    await Contact.create(contact);
    // Prepare email
    const msg = {
      to: 'contact@orcimedlifesciences.com', // recipient email
      from: 'contact@orcimedlifesciences.com', // must be a verified sender on SendGrid
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submitted</h2>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
          <tr><td><strong>Name</strong></td><td>${contact.name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${contact.email}</td></tr>
          <tr><td><strong>Message</strong></td><td>${contact.message || 'N/A'}</td></tr>
        </table>
      `,
    };
    
 
    // Send email
    await sgMail.send(msg);
 
    res.status(200).json({ message: 'Form submitted and email sent successfully.', data: contact });
  } catch (error) {
    console.error('Error submitting contact form:', error.response?.body || error.message);
    res.status(500).json({ message: 'Failed to submit form or send email.' });
  }
});

module.exports = contactRouter;