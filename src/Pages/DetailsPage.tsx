import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import ContactForm from '../Components/ContactForm';
import MenuBar from '../Components/Menu';
import MobileMenu from '../Components/MobileMenu';
import Footer from '../Components/footer'; // Adjust the path as needed based on your project structure

const DetailsPage: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));  
    return (
      <>
        <header>
        {isSmallScreen ? <MobileMenu /> : <MenuBar />}
        </header>
        <main>
          <Box sx={{
            bgcolor:"red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>

          <Box sx={{textAlign: "left", width: "100%"}}>
            Go back
          </Box>
          <Box sx={{width: "70%", bgcolor: "blue", display: "flex", flexDirection:"row"}}>
          <Box sx={{ '@media (max-width:768px)': { margin: '0 auto' } }}>
          <img src="jenny.png" alt="" />
        </Box>
        <Box>

        <Box
              component="h2"
              sx={{
                fontSize: '40px',
                margin: '0',
                color: '#522E07',
                fontFamily: 'Oswald',
              }}
              >
              Jenny Weijland
            </Box>
            Creative lead/ UX Design / Code <br/>geniuscarl@bestwebsite.com+461234567              </Box>
          </Box>
          <Box
              component="h2"
              sx={{
                fontSize: '40px',
                margin: '0',
                color: '#522E07',
                fontFamily: 'Oswald',
              }}
              >
              Get in touch!
            </Box>
          </Box>

        <ContactForm />

        </main>
        <footer><Footer></Footer></footer>
      </>
  );
};

export default DetailsPage;
