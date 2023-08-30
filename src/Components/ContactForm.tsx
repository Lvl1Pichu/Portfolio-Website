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
    <Container maxWidth="lg">
      <Box
        sx={{
          textAlign: "start",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h3" fontFamily="'Oswald', regular">
          Contact us
        </Typography>

        <Divider
          sx={{
            width: "100%",
            margin: "auto",
            marginTop: "2%",
            marginBottom: "8%",
            borderBottom: "3px solid rgba(0, 0, 0, 0.999)",
          }}
        />
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          minHeight: "100vh",
          marginTop: "40px",
        }}
      >
        <form>
          {/* Name */}
          <Box
            sx={{
              textAlign: "start",
              width: "100%",
            }}
          >
            <Typography variant="h6" fontFamily="'Raleway', sans-serif">
              Name
            </Typography>
          </Box>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            id="name"
            sx={{ width: "100%" }}
          />

          <Box
            sx={{
              textAlign: "start",
              // width: "100%",
            }}
          >
            <Typography variant="h6" fontFamily="'Raleway', sans-serif">
              E-mail
            </Typography>
          </Box>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            id="email"
            type="email"
            // sx={{ width: "100%" }}
          />

          <Box
            sx={{
              textAlign: "start",
              // width: "100%",
            }}
          >
            <Typography variant="h6" fontFamily="'Raleway', sans-serif">
              Message
            </Typography>
          </Box>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            multiline
            rows={1}
            id="message"
            // sx={{ width: "100%" }}
          />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#51583F",
                color: "#fff",
                width: "100%",
                maxWidth: "550px",
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
