import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

const ContactForm = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: "start",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" fontFamily="'Raleway', sans-serif">
          Contact us
        </Typography>
        <Divider style={{ width: "550px", margin: "auto" }} />
      </Box>
      <Typography
        variant="h5"
        fontFamily="'Raleway', sans-serif"
        align="center"
        gutterBottom
      >
        Feel free to contact us any time. We will get back to you as soon as we
        can!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <form>
          <TextField
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
          />

          <TextField
            label="E-mail"
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            type="email"
          />

          <TextField
            label="Message"
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows={4}
            id="message"
          />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "#51583F",
                color: "#fff",
                width: "550px",
                fontFamily: "'Raleway', sans-serif",
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

export default ContactForm;
