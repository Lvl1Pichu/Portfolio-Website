import { Box, Divider, Link as MuiLink } from '@mui/material';
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
    <Box
      sx={{
        color: 'black',
        fontSize: '18px',
        fontFamily: 'Raleway',
        fontWeight: '500',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '2rem',
        alignItems: 'center',
        maxWidth: '900px',
        width: '100%',
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
          BW
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
        >
          The Team
        </MuiLink>
        <MuiLink
          component={RouterLink}
          to="/"
          color="inherit"
          underline="hover"
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
      >
        Contact us
      </MuiLink>
    </Box>
  );
}
