import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const ContactForm = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <Box id="contact-section">
      <Box
        sx={{
          textAlign: 'start',
          marginBottom: '20px',
        }}
        id="contact-section"
      >
        <Box
          sx={{
            width: '100%',
            borderBottom: '0.15rem solid black',
            marginBottom: '5rem',
            paddingBottom: '1rem',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Oswald',
              fontWeight: '400',
              '@media (max-width:768px)': { fontSize: '32px' },
            }}
          >
            Contact
          </Typography>
        </Box>
      </Box>

      <Typography
        fontSize="20px"
        fontFamily="'Raleway', sans-serif"
        align="center"
        gutterBottom
      >
        Feel free to contact us any time. <br />
        We will get back to you as soon as we can!
      </Typography>

      {/* Formuläret */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          marginBottom: '100px',
          marginTop: '40px',
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            variant="standard"
            label="Name"
            margin="normal"
            fullWidth
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            sx={{ width: '100%' }}
            required
          />

          <TextField
            variant="standard"
            label="E-mail"
            margin="normal"
            fullWidth
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <TextField
            variant="standard"
            label="Message"
            margin="normal"
            fullWidth
            multiline
            rows={1}
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2rem',
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                boxShadow: '0 .125rem .625rem rgba(0, 0, 0, 0.2)',
                backgroundColor: '#51583F',
                color: '#fff',
                borderRadius: '0',
                width: '100%',
                fontFamily: "'Raleway', sans-serif",
                marginTop: '20px',
                transition: 'all 0.15s',
                '&:hover': {
                  backgroundColor: '#6C784E',
                  boxShadow: '0 .25rem 1.1rem rgba(0, 0, 0, 0.4)',
                  borderRadius: '2rem',
                  transition: 'all 0.15s',
                },
              }}
            >
              Send
            </Button>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={4000}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{
                  width: '100%',
                  '& .MuiSvgIcon-root': {
                    fill: '#fff',
                  },
                  backgroundColor: '#51583F',
                  fontFamily: "'Raleway', sans-serif",
                  color: 'white',
                }}
              >
                Thank you for your message!
              </Alert>
            </Snackbar>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
