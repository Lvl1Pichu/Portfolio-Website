import {
  Box,
  Button,
  Container,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ContactForm = () => {
  const [open, setOpen] = useState(false); // State to manage modal open/close

  const handleOpen = () => {
    setOpen(true); // Open the modal
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
  };

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
              onClick={handleOpen}
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

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;
