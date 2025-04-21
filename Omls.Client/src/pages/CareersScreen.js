import React from 'react'
import { Grid, Typography, Box, Paper, TextField, Button, MenuItem, ListItem, ListItemIcon } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  DatePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const countries = ['USA', 'Canada', 'India', 'UK', 'Germany', 'Australia'];




const CareersScreen = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
    zip: Yup.string().required('ZIP Code is required'),
    acceptTerms: Yup.boolean().oneOf([true], 'This is a required field.'),
    previousJobTitle: Yup.string(),
    previousJobStartDate: Yup.date().nullable(),
    previousJobEndDate: Yup.date().nullable(),
    previousJobDescription: Yup.string(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const payload = {
        title: "Software Engineer Application",
        content: "I am interested in the Software Engineer position.",
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        address: values.address,
        city: values.city,
        country: values.country,
        zip: values.zip,
        previousJobTitle: values.previousJobTitle,
        previousJobStartDate: values.previousJobStartDate?.toISOString(),
        previousJobEndDate: values.previousJobEndDate?.toISOString(),
        previousJobDescription: values.previousJobDescription,
        acceptTerms: values.acceptTerms
      };

      console.log('Form values:', payload); // Debugging line
      const baseUrl = process.env.REACT_APP_API_BASE_URL_LOCAL;
      console.log(baseUrl)
      const response = await fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (response.status === 200) {
        alert('Form submitted successfully!');

        resetForm();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit the form. Please check your connection and try again.');
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, p: 4, bgcolor: 'white' }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="div" color="error" fontWeight="bold">
              <span style={{ color: '#F39200' }}>Careers</span>
            </Typography>
            <Typography variant="subtitle1" mt={2}>
              Partner with Us. We would like to hear from you!
            </Typography>
            {/* You can replace this with your image */}
            <Box
              component="img"
              src="careers.png"
              alt="contact team"
              mt={4}
              sx={{ width: '70%', borderRadius: 2 }}
            />
          </Grid>

          {/* Right Section */}
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
      <Box
        sx={{
          backgroundImage: 'url(/careersBack.png)', // Replace with your actual image path
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
            maxWidth: 800,
            width: '100%',
            p: 4,
            m: {xs: 1, md:15, sm:2}
          }}
        >
          <Typography variant="h4" fontWeight="bold" align="center" mb={3}>
            Write To Us
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                country: '',
                zip: '',
                previousJobTitle: '',
                previousJobStartDate: null,
                previousJobEndDate: null,
                previousJobDescription: '',
                acceptTerms: false,
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ values, handleChange, setFieldValue, errors, touched, handleBlur }) => (
                <Form>
                  <Grid container spacing={2}>

                    {/* Row 1: First Name & Last Name */}
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        placeholder="First Name*"
                        variant="outlined"
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        placeholder="Last Name*"
                        variant="outlined"
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                      />

                    </Grid>

                    {/* Row 2: Email & Phone */}
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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

                    {/* Row 3: Address (full width) */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        placeholder="Address*"
                        variant="outlined"
                        error={touched.address && Boolean(errors.address)}
                        helperText={touched.address && errors.address}
                      />

                    </Grid>

                    {/* Row 4: City, Country, Zip */}
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        placeholder="City*"
                        variant="outlined"
                        error={touched.city && Boolean(errors.city)}
                        helperText={touched.city && errors.city}
                      />

                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        select
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        variant="outlined"
                        error={touched.country && Boolean(errors.country)}
                        helperText={touched.country && errors.country}
                      >
                        <MenuItem value="" disabled >
                          Country*
                        </MenuItem>
                        {countries.map((c) => (
                          <MenuItem key={c} value={c}>
                            {c}
                          </MenuItem>
                        ))}
                      </TextField>

                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        name="zip"
                        value={values.zip}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="ZIP Code*"
                        variant="outlined"
                        error={touched.zip && Boolean(errors.zip)}
                        helperText={touched.zip && errors.zip}
                      />

                    </Grid>

                    {/* Row 5: Previous Job Title (full width) */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="previousJobTitle"
                        value={values.previousJobTitle}
                        onChange={handleChange}
                        placeholder="Previous Job Title"
                        variant="outlined"
                      />
                    </Grid>

                    {/* Row 6: Start & End Dates */}
                    <Grid item xs={6}>
                      <DatePicker
                        label="Date Previous Job Started"
                        value={values.previousJobStartDate}
                        onChange={(date) => setFieldValue('previousJobStartDate', date)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            error={touched.previousJobStartDate && Boolean(errors.previousJobStartDate)}
                            helperText={touched.previousJobStartDate && errors.previousJobStartDate}
                          />
                        )}
                      />

                    </Grid>
                    <Grid item xs={6}>

                      <DatePicker
                        label="Date Previous Job Ended"
                        value={values.previousJobEndDate}
                        onChange={(date) => setFieldValue('previousJobEndDate', date)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            error={touched.previousJobEndDate && Boolean(errors.previousJobEndDate)}
                            helperText={touched.previousJobEndDate && errors.previousJobEndDate}
                          />
                        )}
                      />

                    </Grid>

                    {/* Row 7: Description (textarea) */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="previousJobDescription"
                        value={values.previousJobDescription}
                        onChange={handleChange}
                        placeholder="Previous Job Description"
                        multiline
                        rows={4}
                        variant="outlined"
                      />
                    </Grid>

                    {/* Row 8: Checkbox & Notice */}
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="acceptTerms"
                            checked={values.acceptTerms}
                            onChange={handleChange}
                          />
                        }
                        label="Please click before submission*"
                      />
                      {touched.acceptTerms && errors.acceptTerms && (
                        <Typography color="error" variant="caption">
                          {errors.acceptTerms}
                        </Typography>
                      )}
                      <Typography color="info" variant="body2">
                          By submitting this information, you agree to OrciMed Life Science’s privacy policy.
                        </Typography>
                    </Grid>

                    {/* Row 9: Submit Button */}
                    <Grid item xs={12}>
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
          </LocalizationProvider>

        </Paper>
      </Box>
    </>
  )
}

export default CareersScreen