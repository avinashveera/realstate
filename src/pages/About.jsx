import React,{useState,useEffect} from 'react';
import { Container, Grid, Typography, Card, CardContent, Avatar, IconButton , CircularProgress } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutUs = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
          
          setLoading(false);
        }, 1000);
  
  }, []);

  return (<>
  {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <CircularProgress />
        </div>
      ) :
      (
    <Container maxWidth="lg" sx={{ padding: '20px' }}>
      {/* Section 1: Company Details */}
      <Grid container spacing={4} sx={{ marginBottom: '40px' }}>
        <Grid item xs={12} md={6}>
          <img
            src="https://holrmagazine.com/wp-content/uploads/2022/05/folksgrowth.com-real-estate-business.jpg" // Replace with your company image
            alt="Company"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            About Our Company
          </Typography>
          <Typography variant="body1" gutterBottom>
            We are a registered real estate company with over 10 years of experience in the field. Our mission is to provide transparent and hassle-free property services.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Registration No: XYZ1234567
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Experience: 10+ years
          </Typography>
        </Grid>
      </Grid>

      {/* Section 2: How It Works */}
      <Grid container spacing={4} sx={{ marginBottom: '40px' }}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            How It Works
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ textAlign: 'center', padding: '20px' }}>
            <HomeIcon fontSize="large" />
            <Typography variant="h6" gutterBottom>
              Step 1
            </Typography>
            <Typography variant="body2">We help you find the perfect land.</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ textAlign: 'center', padding: '20px' }}>
            <SearchIcon fontSize="large" />
            <Typography variant="h6" gutterBottom>
              Step 2
            </Typography>
            <Typography variant="body2">Verification and transparency checks.</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ textAlign: 'center', padding: '20px' }}>
            <VerifiedIcon fontSize="large" />
            <Typography variant="h6" gutterBottom>
              Step 3
            </Typography>
            <Typography variant="body2">Finalize and legalize the property.</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ textAlign: 'center', padding: '20px' }}>
            <TransferWithinAStationIcon fontSize="large" />
            <Typography variant="h6" gutterBottom>
              Step 4
            </Typography>
            <Typography variant="body2">Transfer ownership to the customer.</Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Section 3: Our Agents */}
      <Grid container spacing={4} sx={{ marginBottom: '40px' }}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Our Agents
          </Typography>
        </Grid>
        {['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4'].map((agent, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card sx={{ textAlign: 'center', padding: '20px' }}>
              <Avatar
                src={`https://www.pngarts.com/files/5/User-Avatar-PNG-Picture.png`} // Replace with agent image URLs
                alt={agent}
                sx={{ width: 80, height: 80, margin: 'auto', marginBottom: '10px' }}
              />
              <Typography variant="h6" gutterBottom>
                {agent}
              </Typography>
              <Typography variant="body2">Contact: 1234567890</Typography>
              <div>
                <IconButton href="https://facebook.com" target="_blank">
                  <FacebookIcon />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank">
                  <TwitterIcon />
                </IconButton>
                <IconButton href="https://linkedin.com" target="_blank">
                  <LinkedInIcon />
                </IconButton>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Section 4: Why Choose Us */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Why Choose Us
          </Typography>
          <Typography variant="body1">
            We are committed to providing transparent, reliable, and efficient real estate services. Our experienced team ensures that all legal procedures are handled with precision, and our customer-centric approach guarantees satisfaction.
          </Typography>
        </Grid>
      </Grid>
    </Container>
      )}
      </>
  );
};

export default AboutUs;
