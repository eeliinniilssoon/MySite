import React from 'react'
import Box from '@mui/material/Box';
import Moodyforest from '../../Moodyforest.jpg'
import { Paper, Typography, Divider } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Hälsoappen - Ett UX UI projekt',
    link: '#'
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'StädaFint AB - En företagshemsida',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Coolfashion - En klädaffär online',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Skvaller - En nyhetstidning online',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Tentamenbloggen - Din blogg på nätet',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'ToDo - En simpel att göra lista',
    rows: 2,
    cols: 2,
    featured: true,
  },
];
const Projects = () => {
  return (

    <Box
    sx={{
      backgroundImage: `url(${Moodyforest})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Paper
      elevation={4}
      sx={{
        bgcolor: '#191B1D',
        width: '80%',
        minHeight: '60vh',
        margin: '10vh auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        <Typography variant="h4" sx={{ color: '#fff', pb: '10px' }}>
          Mina projekt
        </Typography>

        <Divider sx={{ width: '100%', bgcolor: '#333', margin: '20px 0' }} /> 
   
    <ImageList sx={{ width: 'auto', height: 850}}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{m:'10px'}}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar 
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  

    </Paper>

  </Box> 
  )
 } 

  
 


export default Projects