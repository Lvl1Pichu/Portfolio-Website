import { Box, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

export default function BlackMenu() {
  return (
    <Box
      sx={{
        color: 'black', // Changed color here
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
        <MuiLink href="#" color="inherit" fontSize={'2rem'}>
          BW
        </MuiLink>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            borderColor: 'black', // Changed borderColor here
            padding: '0',
            margin: '0',
          }}
        />

        <MuiLink
          href="#team-section"
          color="inherit"
          underline="hover"
          onClick={e => {
            e.preventDefault();

            const contactSection = document.getElementById('team-section');

            if (contactSection) {
              contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }}
        >
          The Team
        </MuiLink>

        <MuiLink
          component={RouterLink}
          to="/ProjectPage"
          color="inherit"
          underline="hover"
        >
          Portfolio
        </MuiLink>
      </Box>

      <MuiLink
        href="#contact-section"
        color="inherit"
        underline="hover"
        onClick={(e: { preventDefault: () => void; }) => {
          e.preventDefault();

          const contactSection = document.getElementById('contact-section');

          if (contactSection) {
            contactSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }}
      >
        Contact us
      </MuiLink>
    </Box>
  );
}
