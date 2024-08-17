import React, { useState } from 'react';
import { Typography, Grid, TextField, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import {propertyData} from '../data'
import PropertyCard from '../components/PropertyCard'

const RealEstateListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('none');
  const [filteredProperties, setFilteredProperties] = useState(propertyData);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = propertyData.filter(property =>
      property.location.toLowerCase().includes(value)
    );
    setFilteredProperties(filtered);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortType(value);
    const sorted = [...filteredProperties].sort((a, b) => {
      if (value === 'asc') return a.price - b.price;
      if (value === 'desc') return b.price - a.price;
      return 0;
    });
    setFilteredProperties(sorted);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Properties for Sale
      </Typography>
      
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by location"
            value={searchTerm}
            onChange={handleSearch}
            InputProps={{
              startAdornment: <SearchIcon position="start" />
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            label="Sort by Price"
            value={sortType}
            onChange={handleSort}
          >
            <MenuItem value="none">None</MenuItem>
            <MenuItem value="asc">Price: Low to High</MenuItem>
            <MenuItem value="desc">Price: High to Low</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {filteredProperties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
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
    </div>
  );
};

export default RealEstateListPage;
