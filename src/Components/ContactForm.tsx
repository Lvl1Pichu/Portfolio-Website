import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const ContactForm = () => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  // const handleButtonClick = (e) => {
  //   e.preventDefault(); // Prevent the default form submission behavior
  //   setOpenSnackbar(true);
  // };

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
          <TextField
            variant="standard"
            label="Name"
            margin="normal"
            fullWidth
            id="name"
            sx={{ width: "100%" }}
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

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              onClick={() => setOpenSnackbar(true)}
              sx={{
                boxShadow: "0 .125rem .625rem rgba(0, 0, 0, 0.2)",
                backgroundColor: "#51583F",
                color: "#fff",
                borderRadius: "0",
                width: "100%",
                fontFamily: "'Raleway', sans-serif",
                marginTop: "20px",
                "&:hover": {
                  backgroundColor: "#6C784E",
                  boxShadow: "0 .25rem 1.1rem rgba(0, 0, 0, 0.4)",
                  borderRadius: "2rem",
                },
              }}
            >
              Send
            </Button>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{
                  width: "100%",
                  "& .MuiSvgIcon-root": {
                    fill: "#fff",
                  },
                  backgroundColor: "#51583F",
                  fontFamily: "'Raleway', sans-serif",
                  color: "white",
                }}
              >
                Thank you for your message!
              </Alert>
            </Snackbar>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;
