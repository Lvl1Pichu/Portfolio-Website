import { Box, Container, Typography } from '@mui/material';
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
        padding: 2,
      }}
    >
      <Container maxWidth={false} style={{ width: '100%' }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <img src={Logo} alt="Logo" style={{ marginRight: 'auto' }} />
          <Box display="flex">
            <Box mr="144px">
              <Typography
                variant="h6"
                sx={{
                  marginTop: '127px',
                  marginBottom: '43px',
                  fontWeight: 'bold',
                  fontSize: '30px',
                  fontFamily: 'Raleway, sans-serif',
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
                }}
              >
                Our Projects
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  marginTop: '127px',
                  marginBottom: '43px',
                  fontWeight: 'bold',
                  fontSize: '30px',
                  fontFamily: 'Raleway, sans-serif',
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
                }}
              >
                Our future
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
