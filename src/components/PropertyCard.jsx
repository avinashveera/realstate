import React,{useState} from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions  } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';

const RealEstateCard = ({price,location,description,img,_id}) => {


  const navigate = useNavigate();

  const nextpage=(id)=>{
    console.log(id)
    navigate('/description',{state:id})

  }

 

  return (

<Card sx={{ maxWidth: 345, m: 2 }}>
<CardMedia
  component="img"
  height="200"
  image={img}
  alt="Property Image"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div" >
  ₹ {price}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Location: {location}
  </Typography>
  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
   {description}
  </Typography>
</CardContent>
<CardActions>
  <Button size="small" style={{backgroundColor:"#0F2D4F",color:"#fff",padding:"5px 10px",marginRight:"20px"}} startIcon={<AddShoppingCartIcon />}>
    Add to Cart
  </Button>
  <Button onClick={()=> nextpage(_id)} size="small" style={{backgroundColor:"#03B990",color:"#fff" ,padding:"5px 10px"}}>
    Read More
  </Button>
</CardActions>
</Card>

)
}

export default RealEstateCard;
