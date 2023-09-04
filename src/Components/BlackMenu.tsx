import { Box, Container, Divider, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function BlackMenu() {
  const navigateToSection = (sectionId: string) => {
    // First navigate to the homepage
    const navigationEvent = new PopStateEvent('popstate');
    window.history.pushState({}, '', '/');
    window.dispatchEvent(navigationEvent);

    // Add a slight delay to ensure that the HomePage component has rendered
    setTimeout(() => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  return (
    <Container>
      <Box
        sx={{
          color: 'black',
          fontSize: '18px',
          fontFamily: 'Raleway',
          fontWeight: '500',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          mt: '2rem',
          mb: '2rem',
          boxSizing: 'border-box',
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '300px',
            padding: '0',
            height: '60px',
          }}
        >
          <MuiLink
            component={RouterLink}
            to="/"
            color="inherit"
            fontSize={'2rem'}
          >
            <img
              src="./src/assets/logoo.png"
              alt="logo"
              style={{ height: '3.5rem' }}
            />
          </MuiLink>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{
              borderColor: 'black',
              padding: '0',
              margin: '0',
            }}
          />
          <MuiLink
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              e.preventDefault();
              navigateToSection('team-section');
            }}
            color="inherit"
            underline="hover"
            sx={{
              textDecorationThickness: '0.05rem',
              textUnderlineOffset: '0.15rem',
              cursor: 'pointer',
            }}
          >
            The team
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/"
            color="inherit"
            underline="hover"
            sx={{
              textDecorationThickness: '0.05rem',
              textUnderlineOffset: '0.15rem',
            }}
          >
            Home
          </MuiLink>
        </Box>
        <MuiLink
          onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            e.preventDefault();
            navigateToSection('contact-section');
          }}
          color="inherit"
          underline="hover"
          sx={{
            textDecorationThickness: '0.05rem',
            textUnderlineOffset: '0.15rem',
            cursor: 'pointer',
          }}
        >
          Contact us
        </MuiLink>
      </Box>
    </Container>
  );
}
