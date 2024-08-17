import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
 const  navigate=useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 const handleNavigation=(path)=>{
  navigate(path)
 }

  const pages = [['Home','/'], ['Propery','/property'], ['About','/about'], ['Contact','/contact']];
 // const redir = ['/', '/property', '/about', '/contact'];

  const drawer = (
    <Box
    style={{backgroundColor:"#0F2D4F"}}
      sx={{ width: 250, height:"100vh",color:"#fff", textAlign: 'center' }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <IconButton sx={{ float: 'right', m: 1 ,color:"#fff"}}>
        <CloseIcon />
      </IconButton>
      <List>
        {pages.map((page) => (
          <ListItem key={page[0]}  onClick={()=>handleNavigation(`${page[1]}`)}>
            <ListItemText primary={page[0]} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl" style={{backgroundColor:"#0F2D4F"}}>
        <Toolbar disableGutters>
          {/* Logo aligned to the left */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: 'flex' }}
          >
            MyBrand
          </Typography>

          {/* Navigation Links for Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button onClick={()=>handleNavigation(`${page[1]}`)}
               key={page[0]} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page[0]}
              </Button>
            ))}
          </Box>

          {/* Hamburger Menu for Mobile aligned to the right */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
            style={{backgroundColor:"#03B990"}}
              size="large"
              aria-label="menu"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon  />
            </IconButton>
          </Box>
        </Toolbar >
      </Container>

      {/* Drawer for Mobile Menu */}
      <Drawer
      
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
