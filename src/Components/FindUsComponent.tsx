import { Box, Typography } from '@mui/material';
import React from 'react';

const MapComponent: React.FC = () => {
  return (
    <Box
      sx={{
        mt: 4,
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '5rem',
      }}
    >
      <Box
        sx={{
          width: '100%',
          borderBottom: '0.15rem solid black',
          marginBottom: '5rem',
          paddingBottom: '1rem',
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontFamily: 'Oswald', fontWeight: '400' }}
        >
          Find us
        </Typography>
      </Box>
      <Box
        sx={{
          overflow: 'hidden',
          maxWidth: '800px',
          width: '100%',
          height: 'auto',
          boxShadow: '0 .125rem .625rem rgba(0, 0, 0, 0.2)',
          transition: '0.15s',
          '&:hover': {
            boxShadow: '0 .25rem 1.1rem rgba(0, 0, 0, 0.4)',
            borderRadius: '2rem',
            transition: '0.15s',
          },
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.39512405772!2d11.991950277299182!3d57.70974577387078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30de9cbee3d%3A0xbb3f902b63916df6!2sMedieinstitutet!5e0!3m2!1ssv!2sse!4v1693398830514!5m2!1ssv!2sse"
          width="100%"
          height="480"
          style={{ border: 'none' }}
          title="Our Location"
        ></iframe>
      </Box>
    </Box>
  );
};

export default MapComponent;
