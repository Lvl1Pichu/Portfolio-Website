import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Link as MuiLink,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function BlackMobileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateToContactSection = () => {
    handleClose();
    // First navigate to the homepage
    const navigationEvent = new PopStateEvent('popstate');
    window.history.pushState({}, '', '/');
    window.dispatchEvent(navigationEvent);

    // Add a slight delay to ensure that the HomePage component has rendered
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({
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
      <Box>
        <MuiLink
          component={RouterLink}
          to="/"
          color="inherit"
          fontSize={'2rem'}
        >
          <img
            src="https://github.com/Lvl1Pichu/Portfolio-Website/assets/113519935/280ba183-7ade-4664-b297-8594691f9ced"
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
      </Box>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: 'black',
          fontSize: '18px',
          fontFamily: 'Raleway',
          fontWeight: '500',
        }}
      >
        Menu
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
      >
        <MenuItem
          component={RouterLink}
          to="/"
          onClick={handleClose}
          sx={{ fontFamily: 'Raleway' }}
        >
          The team
        </MenuItem>
        <MenuItem
          component={RouterLink}
          to="/ProjectPage"
          onClick={handleClose}
          sx={{ fontFamily: 'Raleway' }}
        >
          Portfolio
        </MenuItem>
        <MenuItem
          onClick={navigateToContactSection}
          sx={{ fontFamily: 'Raleway' }}
        >
          Contact us
        </MenuItem>
      </Menu>
    </Box>
  );
}
