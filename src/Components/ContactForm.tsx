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
          {/* <Typography
            variant="h6"
            textAlign="start"
            fontFamily="'Raleway', sans-serif"
          >
            Name
          </Typography> */}

          <TextField
            variant="standard"
            label="Name"
            margin="normal"
            fullWidth
            id="name"
            sx={{ width: "100%" }}
            autoFocus
          />

          {/* <Typography
            variant="h6"
            textAlign="start"
            fontFamily="'Raleway', sans-serif"
          >
            E-mail
          </Typography> */}

          <TextField
            variant="standard"
            label="E-mail"
            margin="normal"
            fullWidth
            id="email"
            type="email"
          />

          {/* <Typography
            variant="h6"
            textAlign="start"
            fontFamily="'Raleway', sans-serif"
          >
            Message
          </Typography> */}

          <TextField
            variant="standard"
            label="Message"
            margin="normal"
            fullWidth
            multiline
            rows={1}
            id="message"
          />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#51583F",
                color: "#fff",
                width: "100%",
                fontFamily: "'Raleway', sans-serif",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: "#6C784E",
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

export default ContactForm;
