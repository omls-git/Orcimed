const express = require('express');
const { Contact } = require('../models');
const SendAnEmail = express.Router();
const sgMail = require('@sendgrid/mail');
 
// Set your API key (replace with yours or use env vars)
sgMail.setApiKey('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');
 
SendAnEmail.get('/', async (req, res) => {
  const contactedUs = await Contact.findAll();
  res.json(contactedUs);
});
 
SendAnEmail.post('/', async (req, res) => {
  try {
    const contact = req.body;
 
    // Save to DB
    await Contact.create(contact);
 
    // Prepare email
    const msg = {
      to: 'rohith.dudam@orcimedlifesciences.com', // recipient email
      from:'jyoti.ghali@orcimedlifesciences.com', //'no-reply@orcimedlifesciences.com', // must be a verified sender on SendGrid
      subject: 'New Contact Form Submission',
      text: `You received a new contact form submission:
Name: ${contact.name}
Email: ${contact.email}
Message: ${contact.message || 'N/A'}
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