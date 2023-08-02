import React from 'react'
import Box from '@mui/material/Box';
import Moodyforest from '../../Moodyforest.jpg'
import { Paper, Typography, Divider, ListItem, ListItemText } from '@mui/material';

const AboutMe = () => {
  return (
  
    <Box
      sx={{
        backgroundImage: `url(${Moodyforest})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        height: '90vh',
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
      
      <Typography variant="h4" sx={{ color: '#fff' }}>
          Kontaktinformation
        </Typography>

        <Divider sx={{ width: '100%', bgcolor: '#333', margin: '20px 0' }} />

        <Paper
          elevation={2}
          sx={{
            bgcolor: '#333',
            width: '100%',
            color: '#fff',
            padding: '20px',
            margin: '10px'
          }}
        >
          <ListItem sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'}}>
          <ListItemText>Namn: Elin Nilsson</ListItemText>   
          <ListItemText>Adress: Blåsippevägen 2, 571 65 Grimstorp</ListItemText>
          <ListItemText>Mobil: 073 075 37 90</ListItemText>  
          <ListItemText>Mail: elin.nilsson.97@hotmail.com</ListItemText>
          <ListItemText>Personnummer: 1997 01 10</ListItemText>  
          </ListItem>
        </Paper> 

     </Paper>
     


     </Box>

  )
}

export default AboutMe