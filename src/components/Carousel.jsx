import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import img1 from '../img/realstate1.jpg'
import img2 from '../img/realstate2.jpg'
import img3 from '../img/realstate3.jpg'


const carouselItems = [
  {
    image: img1,
    title: 'Slide 1 Title',
    description: 'This is the description for slide 1.',
    buttonText: 'Learn More',
    buttonLink: '#',
  },
  {
    image: img2,
    title: 'Slide 2 Title',
    description: 'This is the description for slide 2.',
    buttonText: 'Explore',
    buttonLink: '#',
  },
  {
    image: img3,
    title: 'Slide 3 Title',
    description: 'This is the description for slide 3.',
    buttonText: 'Get Started',
    buttonLink: '#',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear the interval on unmount
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container  sx={{ position: 'relative', overflow: 'hidden', mt: 2 ,width:"100vw"}}>
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              minWidth: '100%',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '100%', height: '400px' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: "100px",
                left: '50%',
                transform: 'translateX(-50%)',  
                color: '#fff',
                padding: 5,
                borderRadius: 2,
                Width: '200px',
                
              }}
            >
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {item.description}
              </Typography>
              <Button
              style={{backgroundColor:"#03B990",minWidth:"160px"}}
                variant="contained"
                color="primary"
                href={item.buttonLink}
              >
                {item.buttonText}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Previous Button */}
      <Button
        onClick={goToPrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
        }}
      >
        <ArrowBackIos />
      </Button>

      {/* Next Button */}
      <Button
        onClick={goToNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
        }}
      >
        <ArrowForwardIos />
      </Button>
    </Container>
  );
};

export default Carousel;
