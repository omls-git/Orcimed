const express = require('express');
const router = express.Router();
const { Posts } = require('../models');
const multer = require('multer');
const sgMail = require('@sendgrid/mail');
const upload = multer({ storage: multer.memoryStorage() }); // ✅ Important fix

sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

router.post('/', upload.single('cv'), async (req, res) => {
  try {
    const userDetails = req.body;
    const cvFile = req.file;

    console.log('🟢 req.body:', userDetails);
    console.log('🟢 req.file:', cvFile);

    await Posts.create({
      title: userDetails.title,
      content: userDetails.content,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      phone: userDetails.phone,
      address: userDetails.address,
      city: userDetails.city,
      country: userDetails.country,
      zip: userDetails.zip,
      previousJobTitle: userDetails.previousJobTitle || null,
      previousJobStartDate: userDetails.previousJobStartDate ? new Date(userDetails.previousJobStartDate) : null,
      previousJobEndDate: userDetails.previousJobEndDate ? new Date(userDetails.previousJobEndDate) : null,
      previousJobDescription: userDetails.previousJobDescription || null,
    });

    const msg = {
      to: 'contact@orcimedlifesciences.com',
      from: 'contact@orcimedlifesciences.com',
      subject: 'New Career Form Submission',
      html: `
        <h2>New Career Form Submitted</h2>
        <p><strong>Name:</strong> ${userDetails.firstName} ${userDetails.lastName}</p>
        <p><strong>Email:</strong> ${userDetails.email}</p>
        <p><strong>Phone:</strong> ${userDetails.phone}</p>
        <p><strong>City:</strong> ${userDetails.city}, ${userDetails.country}</p>
        <p><strong>Previous Job:</strong> ${userDetails.previousJobTitle || '-'}</p>
        <p><strong>Description:</strong> ${userDetails.previousJobDescription || '-'}</p>
        <p><strong>Accepted Terms:</strong> ${userDetails.acceptTerms === 'true' ? 'Yes' : 'No'}</p>
      `,
    };

    if (cvFile && cvFile.buffer) {
      msg.attachments = [
        {
          content: cvFile.buffer.toString('base64'),
          filename: cvFile.originalname,
          type: cvFile.mimetype,
          disposition: 'attachment',
        },
      ];
    }

    await sgMail.send(msg);

    res.status(200).json({ message: 'Form submitted and email sent successfully.' });
  } catch (error) {
    console.error('❌ Error submitting details:', error.response?.body || error.message);
    res.status(500).json({ message: 'Failed to submit form or send email.' });
  }
});
