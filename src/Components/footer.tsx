import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';


const Footer: React.FC = () => {

    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
      navigate(path);
    };


  return (
    <Box
      sx={{
        backgroundColor: "rgba(81, 88, 63, 0.57)", // Colour #51583F with 57% Opacity
        color: "white",
        padding: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <p></p>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Box mr={4}>
            <Typography variant="h6">Company</Typography>
            <Typography variant="body2">About us</Typography>
            <Typography variant="body2">Careers</Typography>
            <Typography variant="body2">Our Projects</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Help</Typography>
            <Typography 
              variant="body2" 
              onClick={() => handleNavigation('/contact-us-page')}
              style={{ cursor: 'pointer' }}
            >
              Contact
            </Typography>            <Typography variant="body2">Support</Typography>
            <Typography variant="body2">??????</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
