const express = require('express');
const router = express.Router();
const { Posts } = require('../models');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
router.get('/', async(req, res) => {
  const listOfPosts =  await Posts.findAll();
  res.json(listOfPosts)
});

router.post('/', async(req, res) => {
  try {
      const userDetails = req.body;
   
      // Save to DB
      await Posts.create(userDetails);
      // Prepare email
      const msg = {
        to: 'contact@orcimedlifesciences.com', // recipient email
        from: 'contact@orcimedlifesciences.com', // must be a verified sender on SendGrid
        subject: 'New Career Form Submission',
        html: `
          <h2>New Career Form Submitted</h2>
          <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
            <tr><td><strong>Title</strong></td><td>${userDetails?.title}</td></tr>
            <tr><td><strong>Content</strong></td><td>${userDetails?.content}</td></tr>
            <tr><td><strong>First Name</strong></td><td>${userDetails?.firstName}</td></tr>
            <tr><td><strong>Last Name</strong></td><td>${userDetails?.lastName}</td></tr>
            <tr><td><strong>Email</strong></td><td>${userDetails?.email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${userDetails?.phone}</td></tr>
            <tr><td><strong>Address</strong></td><td>${userDetails?.address}</td></tr>
            <tr><td><strong>City</strong></td><td>${userDetails?.city}</td></tr>
            <tr><td><strong>Country</strong></td><td>${userDetails?.country}</td></tr>
            <tr><td><strong>Zip Code</strong></td><td>${userDetails?.zip}</td></tr>
            <tr><td><strong>Previous Job Title</strong></td><td>${userDetails?.previousJobTitle || '-'}</td></tr>
            <tr><td><strong>Previous Job Start Date</strong></td><td>${userDetails?.previousJobStartDate || '-'}</td></tr>
            <tr><td><strong>Previous Job End Date</strong></td><td>${userDetails?.previousJobEndDate || '-'}</td></tr>
            <tr><td><strong>Previous Job Description</strong></td><td>${userDetails?.previousJobDescription || '-'}</td></tr>
            <tr><td><strong>Accepted Terms</strong></td><td>${userDetails?.acceptTerms ? 'Yes' : 'No'}</td></tr>
          </table>
        `,
      };    
   
      // Send email
      await sgMail.send(msg);
   
      res.status(200).json({ message: 'Form submitted and email sent successfully.', data: userDetails });
    } catch (error) {
      console.error('Error submitting details:', error.response?.body || error.message);
      res.status(500).json({ message: 'Failed to submit form or send email.' });
    }
});

module.exports = router;
