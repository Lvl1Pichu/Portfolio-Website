import { Box, Container, Link as MuiLink, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const textStyles = {
  fontFamily: 'Raleway',
  fontWeight: '400',
  fontSize: '16px',
  cursor: 'pointer',
  marginBottom: '1rem',
  '&:hover': {
    textDecoration: 'underline',
    textDecorationThickness: '0.05rem',
    textUnderlineOffset: '0.15rem',
  },
  '@media (max-width:768px)': { fontSize: '16px' },
};

function Footer2() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(81, 88, 63, 0.56)',
        width: '100%',
      }}
    >
      <Container
        sx={{ position: 'relative', paddingTop: '32px', paddingBottom: '32px' }}
      >
        <MuiLink
          href="#"
          color="inherit"
          fontSize={'2rem'}
          sx={{ position: 'absolute', top: '24px', left: '32px' }}
        >
          <img
            src="https://github.com/Lvl1Pichu/Portfolio-Website/assets/117076586/fc4bda46-b9cc-4e75-904b-59db3c2b1111"
            alt="logo"
            style={{ height: '3.5rem' }}
          />
        </MuiLink>

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-end',
            // '@media (max-width:768px)': { justifyContent: 'center' },
          }}
        >
          {/* Column 1 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: '2rem',
            }}
          >
            <Typography
              sx={{
                ...textStyles,
                fontWeight: 'bold',
              }}
            >
              Company
            </Typography>
            <Typography
              sx={{
                ...textStyles,
              }}
            >
              About us
            </Typography>
            <Typography
              sx={{
                ...textStyles,
              }}
            >
              Careers
            </Typography>
            <Typography
              onClick={() => handleNavigation('/ProjectPage')}
              sx={{
                ...textStyles,
              }}
            >
              Our Projects
            </Typography>
          </Box>

          {/* Column 2 */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                ...textStyles,
                fontWeight: 'bold',
              }}
            >
              Help
            </Typography>
            <Typography
              onClick={() => handleNavigation('/ContactPage')}
              sx={{
                ...textStyles,
              }}
            >
              Contact
            </Typography>
            <Typography
              sx={{
                ...textStyles,
              }}
            >
              Support
            </Typography>
            <Typography
              sx={{
                ...textStyles,
              }}
            >
              Our future
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer2;
