import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Divider, Link, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function MobileMenu() {
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

  const navigateToTeamSection = () => {
    handleClose();
    // First navigate to the homepage
    const navigationEvent = new PopStateEvent('popstate');
    window.history.pushState({}, '', '/');
    window.dispatchEvent(navigationEvent);

    // Add a slight delay to ensure that the HomePage component has rendered
    setTimeout(() => {
      const contactSection = document.getElementById('team-section');
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
        color: '#FCF8EC',
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
        <Link href="#" color="inherit" fontSize={'2rem'}>
          <img src="./logoBright.png" alt="logo" style={{ height: '3.5rem' }} />
        </Link>
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
      </Box>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: '#FCF8EC',
          fontSize: '18px',
          fontFamily: 'Raleway',
          fontWeight: '500',
        }}
      >
        <MenuIcon />
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
            backgroundColor: '#FCF8EC',
          },
        }}
      >
        <MenuItem
          component={RouterLink}
          to="/"
          onClick={navigateToTeamSection}
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
