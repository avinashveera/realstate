import React, { useState } from 'react';
import { Box, Typography, Avatar, Container, Grid, IconButton, Rating } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'This is the best service I have ever used. Highly recommended!',
    rating: 5,
    avatar: 'https://th.bing.com/th/id/OIP.VtdlzFzK5BWwfRWxcBa01wAAAA?w=460&h=460&rs=1&pid=ImgDetMain',
  },
  {
    name: 'Jane Smith',
    feedback: 'Great experience, and the support team was very helpful.',
    rating: 4,
    avatar: 'https://th.bing.com/th/id/OIP.VtdlzFzK5BWwfRWxcBa01wAAAA?w=460&h=460&rs=1&pid=ImgDetMain',
  },
  {
    name: 'Alex Johnson',
    feedback: 'I am very satisfied with the quality of the service.',
    rating: 5,
    avatar: 'https://th.bing.com/th/id/OIP.VtdlzFzK5BWwfRWxcBa01wAAAA?w=460&h=460&rs=1&pid=ImgDetMain',
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Testimonials
      </Typography>
      <Box
        sx={{
          perspective: '1000px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '600px',
            padding: 4,
            backgroundColor: '#fff',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
            borderRadius: 2,
            transformStyle: 'preserve-3d',
            transform: 'rotateY(10deg)',
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <Avatar
                alt={testimonials[currentIndex].name}
                src={testimonials[currentIndex].avatar}
                sx={{ width: 100, height: 100, mx: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} sm={8} style={{display:"flex",justifyContent:"center",flexDirection:'column',alignItems:"center"}}>
              <Typography variant="h6" gutterBottom>
                {testimonials[currentIndex].name}
              </Typography>
              <Rating
                value={testimonials[currentIndex].rating}
                readOnly
                precision={0.5}
              />
              <Typography variant="body1" sx={{ mt: 2 }}>
                {testimonials[currentIndex].feedback}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Previous Button */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
        >
          <ArrowBackIos />
        </IconButton>

        {/* Next Button */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Testimonial;
