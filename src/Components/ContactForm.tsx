import { Box, Button, TextField, Typography } from '@mui/material';

const ContactForm = () => {
  return (
    <Box>
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
        variant="h5"
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
        <form>
          <TextField
            variant="standard"
            label="Name"
            margin="normal"
            fullWidth
            id="name"
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
            required
          />

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
                '&:hover': {
                  backgroundColor: '#6C784E',
                  boxShadow: '0 .25rem 1.1rem rgba(0, 0, 0, 0.4)',
                  borderRadius: '2rem',
                },
              }}
            >
              Send
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
