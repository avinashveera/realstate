import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


/* //"#0F2D4F"
#03B990
*/


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add form submission logic here
  };

  return (
    <Container maxWidth="lg" sx={{ padding: '20px' }}>
      {/* Contact Us Heading */}
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: '40px' }}>
        Contact Us
      </Typography>

      {/* Contact Details */}
      <Grid container spacing={4} sx={{ marginBottom: '40px' }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', padding: '20px' }}>
            <PhoneIcon fontSize="large" sx={{ color:"#03B990"}} />
            <Typography variant="h6" gutterBottom>
              Phone
            </Typography>
            <Typography variant="body2">+91-123-456-7890</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', padding: '20px' }}>
            <EmailIcon fontSize="large" sx={{ color:"#03B990"}} />
            <Typography variant="h6" gutterBottom>
              Email
            </Typography>
            <Typography variant="body2">info@realestate.com</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', padding: '20px' }}>
            <LocationOnIcon fontSize="large" sx={{ color:"#03B990"}} />
            <Typography variant="h6" gutterBottom >
              Location
            </Typography>
            <Typography variant="body2">123 Real Estate St., City, Country</Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Contact Form */}
      <Card sx={{ backgroundColor:"#03B990"}}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ marginBottom: '20px' }}>
            Get in Touch
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                sx={{ backgroundColor:"#fff"}}
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                sx={{ backgroundColor:"#fff"}}
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                sx={{ backgroundColor:"#fff"}}
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                sx={{ backgroundColor:"#fff"}}
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '20px'  }}>
                <Button variant="contained" color="primary" type="submit"sx={{ backgroundColor:"#0F2D4F"}}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContactUs;
