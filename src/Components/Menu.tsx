import { Box, Container, Divider, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function MenuBar() {
  return (
    <Container
      sx={{
        color: '#FCF8EC',
        fontSize: '18px',
        fontFamily: 'Raleway',
        fontWeight: '500',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '2rem',
        marginBottom: '2rem',
        alignItems: 'center',
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
          <img
            src="./logoBright.png"
            alt="logo"
            style={{ height: '3.5rem' }}
          />
        </MuiLink>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            borderColor: '#FCF8EC',
            padding: '0',
            margin: '0',
          }}
        />

        <MuiLink
          href="#team-section"
          color="inherit"
          underline="hover"
          sx={{
            textDecorationThickness: '0.05rem',
            textUnderlineOffset: '0.15rem',
          }}
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
          The team
        </MuiLink>

        <MuiLink
          component={RouterLink}
          to="/ProjectPage"
          color="inherit"
          underline="hover"
          sx={{
            textDecorationThickness: '0.05rem',
            textUnderlineOffset: '0.15rem',
          }}
        >
          Portfolio
        </MuiLink>
      </Box>

      <MuiLink
        href="#contact-section"
        color="inherit"
        underline="hover"
        sx={{
          textDecorationThickness: '0.05rem',
          textUnderlineOffset: '0.15rem',
        }}
        onClick={(e: { preventDefault: () => void }) => {
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
    </Container>
  );
}
