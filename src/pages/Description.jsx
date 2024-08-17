import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid} from '@mui/material';

import {propertyData} from '../data'

const PropertyDescriptionPage = ({_id}) => {
    console.log(_id)
  
  const property = propertyData.find((item) => item._id === _id); // Find the property by ID

  if (!property) {
    return (
      <Typography variant="h6" color="error" align="center">
        Property not found. {_id}
      </Typography>
    );
  }

  return (
    <Grid container spacing={3} justifyContent="center" style={{ padding: '20px' }}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={property.image}
            alt="Property Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {property.price}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Location: {property.location}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {property.description}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {property.details}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PropertyDescriptionPage;
