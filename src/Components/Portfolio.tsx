import {
  Box,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material';

const projects = [
  {
    title: 'ZET Webshop',
    image: './src/assets/zet.jpeg',
  },
  {
    title: 'Smartly Home App',
    image: './src/assets/smartly.png',
  },
  {
    title: 'Nordic Knots',
    image: './src/assets/nordic.jpeg',
  },
  {
    title: 'The Nue Co.',
    image: './src/assets/thenue.jpeg',
  },
  {
    title: 'Haus E-commerce',
    image: './src/assets/Haus.jpeg',
  },
  {
    title: 'Task & Project App',
    image: './src/assets/smarttask.png',
  },
];

function Portfolio() {
  return (
    <Container>
      <Link
        sx={{
          display: 'flex',
          gap: '0.7rem',
          alignItems: 'center',
          marginBottom: '5rem',
          cursor: 'pointer',
          color: 'black',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
            textDecorationThickness: '0.05rem',
            textUnderlineOffset: '0.15rem',
          },
        }}
      >
        <img
          src="./src/assets/arrowLeft.png"
          alt="arrow"
          style={{ height: '10px' }}
        />
        <Typography
          sx={{
            fontFamily: 'Raleway',
            fontSize: '15px',
          }}
        >
          GO BACK
        </Typography>
      </Link>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            borderBottom: '0.15rem solid black',
            marginBottom: '5rem',
            paddingBottom: '1rem',
          }}
        >
          <Typography variant="h2" sx={{ fontFamily: 'Oswald' }}>
            Projects
          </Typography>
        </Box>
        <Box
          sx={{
            width: '85%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '5rem',
          }}
        >
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 3, md: 5 }}
          >
            {projects.map((project) => (
              <Grid key={project.title} item xs={12} sm={6} md={6}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt="Project Image"
                  sx={{
                    width: '100%',
                    height: '550px',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1rem',
                  }}
                >
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{ fontFamily: 'Raleway', fontSize: '18px' }}
                  >
                    {project.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Portfolio;
