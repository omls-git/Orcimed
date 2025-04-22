import React from 'react'
import { Box, Grid, Typography, Paper, TextField, Button, ListItem, ListItemIcon } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const ContactScreen = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    message: Yup.string().required('Message is required'),
  });
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      };

      const baseUrl = process.env.REACT_APP_API_BASE_URL_LOCAL;

      const response = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 200) {
        alert('Message sent successfully!');
        resetForm();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send message. Please check your connection and try again.');
    }
  };

  return (
    <>
      {/* Header Section (You can reuse from Careers) */}
      <Box sx={{ flexGrow: 1, p: 4, bgcolor: 'white' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="div" color="error" fontWeight="bold">
              <span style={{ color: '#F39200' }}>Contact Us</span>
            </Typography>
            <Typography variant="subtitle1" mt={2}>
              We’d love to hear from you. Reach out to us!
            </Typography>
            <Box
              component="img"
              src="/contact.png"
              alt="contact"
              mt={4}
              sx={{ width: '70%', borderRadius: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
          <Box
              sx={{
                py: 6,
                bgcolor: '#007b8f',
                color: 'white',
                borderRadius: '0px 40px 0px 40px',
                mx: 'auto',
                width:{xs:'100%', md:'90%'},
              }}
            >
             <ListItem  alignItems="center">
                <ListItemIcon>
                  <EmailIcon  sx={{ backgroundColor:"black",color: 'white', fontSize: {sx:25,md:30}, p:'10px', mx:{sx:1,md:5}, borderRadius:"50%" }} />
                </ListItemIcon>
                <Typography variant="body1" fontSize={{xs:'18px', md:"22px"}} fontWeight="bold"   sx={{ 
                    fontWeight: 'bold', 
                    color: 'white',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    width: '100%'
                  }}>
                contact@orcimedlifesciences.com
                </Typography>
            </ListItem>
            <ListItem  alignItems="center" sx={{mt:'20px'}}>
                <ListItemIcon>
                  <LinkedInIcon  sx={{ backgroundColor:"black",color: 'white',  fontSize: {sx:25,md:30}, p:'10px', mx:{sx:1,md:5},borderRadius:"50%" }}/>
                </ListItemIcon>
                <Typography variant="body1"fontSize={{xs:'18px', md:"22px"}} fontWeight="bold" >
                LinkedIn
                </Typography>
            </ListItem>
              <ListItem  alignItems={{sx:"flex-start"}} sx={{mt:'20px'}}>
                <ListItemIcon>
                  <InfoIcon  sx={{ backgroundColor:"black",color: 'white',  fontSize: {sx:25,md:30}, p:'10px',mx:{sx:1,md:5},borderRadius:"50%" }} />
                </ListItemIcon>
                <Typography variant="body1" fontSize={{xs:'18px', md:"22px"}} fontWeight="bold" >
                We are committed to excellence and transparency
                </Typography>
            </ListItem>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Form Section */}
      <Box
        sx={{
          backgroundImage: 'url(/contacrbg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
        }}
      >
        <Paper
          elevation={5}
          sx={{
            bgcolor: 'white',
            borderRadius: 3,
            maxWidth: 600,
            width: '100%',
            p: 4,
            m: {xs: 1, md:15, sm:2}
          }}
        >
          <Typography variant="h4" fontWeight="bold" align="center" mb={3}>
            Send Us a Message
          </Typography>

          <Formik
            initialValues={{ name: '', email: '', phone: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, errors, touched }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Name*"
                      variant="outlined"
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Email*"
                      variant="outlined"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="Phone*"
                      variant="outlined"
                      error={touched.phone && Boolean(errors.phone)}
                      helperText={touched.phone && errors.phone}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      placeholder="Message*"
                      variant="outlined"
                      multiline
                      minRows={4}
                      error={touched.message && Boolean(errors.message)}
                      helperText={touched.message && errors.message}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Box display="flex" justifyContent="center">
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          px: 4,
                          backgroundColor: '#F39200',
                          '&:hover': {
                            backgroundColor: '#d87f00', // optional darker shade for hover
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </>

  )
}

export default ContactScreen