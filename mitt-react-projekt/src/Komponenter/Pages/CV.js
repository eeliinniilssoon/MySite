import React from 'react'
import Box from '@mui/material/Box';
import Moodyforest from '../../Moodyforest.jpg'

const CV = () => {
  return (
    <Box sx={{ 
        backgroundImage: `url(${Moodyforest})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
       }} >
       </Box>
  )
}

export default CV