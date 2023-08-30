import { Button, Container, TextField, Typography } from "@mui/material";

const ContactForm = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" gutterBottom>
        Feel free to contact us any time. We will get back to you as soon as we
        can!
      </Typography>
      <div
        style={{
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
            variant="standard"
            margin="normal"
            fullWidth
            id="name"
          />

          <TextField
            label="E-mail"
            variant="standard"
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

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;
