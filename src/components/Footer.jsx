import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, IconButton, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, LocationOn, Phone, Email } from '@mui/icons-material';
import img1 from '../img/realstate1.jpg'
import img2 from '../img/realstate2.jpg'
import img3 from '../img/realstate3.jpg'

const footerLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Contact', href: '#' },
];

const photoGallery = [
  img1,
  img2,
  img3,
  img1,
];

const Footer = () => {

  const style={
    flexRow: {display: 'flex',flexDirection:"row",alignItem:"center"}
  }

  return (
    <Box component="footer" sx={{ backgroundColor: '#0F2D4F', color: '#fff', py: 4 ,px:5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Get in Touch */}
          <Grid item xs={12} md={3}  >
            <Typography variant="h6" >Get in Touch</Typography>
            <Box sx={{ mt: 2 }}>
              <Box sx={{  mb: 2 }} style={style.flexRow}>
                <LocationOn sx={{ mr: 1 }} />
                <Typography variant="body1">123 Street, City, Country</Typography>
              </Box>
              <Box sx={{  mb: 2 }} style={style.flexRow}>
                <Phone sx={{ mr: 1 }}  />
                <Typography variant="body1">+123 456 7890</Typography>
              </Box>
              <Box sx={{  mb: 2 }} style={style.flexRow}>
                <Email sx={{ mr: 1 }} />
                <Typography variant="body1">info@example.com</Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <IconButton color="inherit" href="https://facebook.com">
                  <Facebook />
                </IconButton>
                <IconButton color="inherit" href="https://twitter.com">
                  <Twitter />
                </IconButton>
                <IconButton color="inherit" href="https://instagram.com">
                  <Instagram />
                </IconButton>
                <IconButton color="inherit" href="https://linkedin.com">
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Quick Links</Typography>
            <Box sx={{ mt: 2 , display: 'flex',flexDirection:"column" }}>
              {footerLinks.map((link, index) => (
                <Typography key={index} variant="body1" sx={{ mb: 2 }}>
                  <Link href={link.href} color="inherit" underline="hover">
                    {link.label}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Photo Gallery */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Photo Gallery</Typography>
            <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {photoGallery.map((photo, index) => (
                <Box key={index} sx={{ width: '100px', height: '100px', overflow: 'hidden', borderRadius: 1 }}>
                  <img src={photo} alt={`Gallery ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Newsletter</Typography>
            <Box sx={{ mt: 2 }}>
              <TextField
                style={{backgroundColor:"#fff",color:"#000"}}
                variant="outlined"
                fullWidth
                placeholder="Enter your email"
                size="small"
                sx={{ mb: 1 }}
              />
              <Button variant="contained"  style={{backgroundColor:"#03B990"}} fullWidth>
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
