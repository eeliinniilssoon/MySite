import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Moodyforest from '../../Moodyforest.jpg'

const AboutMe = () => {
  return (
  
    <Box sx={{ 
      backgroundImage: `url(${Moodyforest})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      height: '100vh'}}>
    
     <Card sx={{
      bgcolor:'#191B1D', 
      width:'80%', 
      height:'80vh', 
      margin:'0 auto', 
      position: 'relative', 
      top: '10vh'}}>
      
      Här kan det vara en söt bild kanske 

     </Card>
     


     </Box>

  )
}

export default AboutMe