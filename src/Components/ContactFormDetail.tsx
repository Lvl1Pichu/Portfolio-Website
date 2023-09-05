import { Box, Button, Container, TextField } from '@mui/material';

const ContactFormDetail = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          textAlign: 'start',
        }}
        id="contact-section"
      ></Box>

      {/* Formuläret */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
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
            autoFocus
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
    </Container>
  );
};

export default ContactFormDetail;
