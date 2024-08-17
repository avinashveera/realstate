import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid, CircularProgress } from '@mui/material';

import {propertyData} from '../data'
import PropertyCard from '../components/PropertyCard'


const RealEstatePage = () => {
  const [visibleProperties, setVisibleProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMoreCount] = useState(3);

  useEffect(() => {
    loadInitialProperties();
  }, []);

  const loadInitialProperties = () => {
    setVisibleProperties(propertyData.slice(0, showMoreCount));
  };

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProperties(propertyData.slice(0, visibleProperties.length + 3
      ));
      setLoading(false);
    }, 1000);
  };
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign='center'>
        Properties for Sale
      </Typography>

      <Grid container spacing={2}>
        {visibleProperties.map(property => (
          <Grid item xs={12} sm={6} md={4} key={property._id}>

            <PropertyCard
            img={property.image}
            price={property.price}
            location={property.location}
            description={property.description}
            _id={property._id}
            key={property._id}

            />
           
          </Grid>
        ))}
      </Grid>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <CircularProgress />
        </div>
      ) : (
        visibleProperties.length < propertyData.length && (
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <Button style={{backgroundColor:"#03B990"}} variant="contained" onClick={handleShowMore}>
              Show More
            </Button>
          </div>
        )
      )}
    </div>
  );
};

export default RealEstatePage;
