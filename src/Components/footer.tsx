import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        height: '586px',
        backgroundColor: 'rgba(81, 88, 63, 0.56)',
        color: 'black',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <Box>
        {/* <Container maxWidth={false} style={{ width: '100%' }}> */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            // width: '100%',
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ marginLeft: '32px', marginTop: '32px' }}
          />
          <Box
            display="flex"
            sx={{
              marginRight: '2rem',
              '@media (max-width:768px)': { marginRight: '32px' },
            }}
          >
            <Box
              sx={{
                marginRight: '144px',
                '@media (max-width:768px)': { margin: '0' },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  marginTop: '127px',
                  marginBottom: '43px',
                  fontWeight: 'bold',
                  fontSize: '30px',
                  fontFamily: 'Raleway, sans-serif',
                  '@media (max-width:768px)': { fontSize: '24px' },
                }}
              >
                Company
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: '43px',
                  fontSize: '30px',
                  fontWeight: 'light',
                  fontFamily: 'Raleway, sans-serif',
                  '@media (max-width:768px)': { fontSize: '24px' },
                }}
              >
                About us
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: '43px',
                  fontSize: '30px',
                  fontWeight: '300',
                  fontFamily: 'Raleway, sans-serif',
                  '@media (max-width:768px)': { fontSize: '24px' },
                }}
              >
                Careers
              </Typography>
              <Typography
                variant="body2"
                onClick={() => handleNavigation('/ProjectPage')}
                style={{ cursor: 'pointer' }}
                sx={{
                  marginBottom: '43px',
                  fontSize: '30px',
                  fontWeight: '300',
                  fontFamily: 'Raleway, sans-serif',
                  '@media (max-width:768px)': { fontSize: '24px' },
                }}
              >
                Our Projects
              </Typography>
            </Box>
            <Box sx={{ '@media (max-width: 768px)': { marginLeft: '2rem' } }}>
              <Typography
                variant="h6"
                sx={{
                  marginTop: '127px',
                  marginBottom: '43px',
                  fontWeight: 'bold',
                  fontSize: '30px',
                  fontFamily: 'Raleway, sans-serif',
                  '@media (max-width:768px)': { fontSize: '24px' },
                }}
              >
                Help
              </Typography>
              <Typography
                variant="body2"
                onClick={() => handleNavigation('/ContactPage')}
                style={{ cursor: 'pointer' }}
                sx={{
                  marginBottom: '43px',
                  fontSize: '30px',
                  fontWeight: '300',
                  fontFamily: 'Raleway, sans-serif',
                  '@media (max-width:768px)': { fontSize: '24px' },
                }}
              >
                Contact
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginBottom: '43px',
                  fontSize: '30px',
                  fontWeight: '300',
                  fontFamily: 'Raleway, sans-serif',
                  '@media (max-width:768px)': { fontSize: '24px' },
                }}
              >
                Support
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '30px',
                  fontWeight: '300',
                  fontFamily: 'Raleway, sans-serif',
                  '@media (max-width:768px)': { fontSize: '24px' },
                }}
              >
                Our future
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
