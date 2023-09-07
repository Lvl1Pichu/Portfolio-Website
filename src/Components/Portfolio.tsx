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
    title: 'Aime',
    image: './src/assets/portfolio-imgs/aime.png',
    link: 'https://aime.co/en/',
  },
  {
    title: 'Nordic Knots',
    image: './src/assets/portfolio-imgs/nordic.jpeg',
    link: 'https://nordicknots.com/se',
  },
  {
    title: 'Marbodal',
    image: './src/assets/portfolio-imgs/marbodal.jpeg',
    link: 'https://www.marbodal.se/',
  },
  {
    title: 'The Nue Co.',
    image: './src/assets/portfolio-imgs/thenue.jpeg',
    link: 'https://www.thenueco.com/',
  },
  {
    title: 'Veloretti Bikes',
    image: './src/assets/portfolio-imgs/veloretti.jpeg',
    link: 'https://www.veloretti.com/',
  },
  {
    title: 'Volvo',
    image: './src/assets/portfolio-imgs/volvo.jpeg',
    link: 'https://www.volvocars.com/se/',
  },
];

function Portfolio() {
  return (
    <Container sx={{ marginTop: '4rem' }}>
      <Link
        href="/"
        sx={{
          display: 'flex',
          gap: '0.7rem',
          alignItems: 'center',
          marginBottom: '3.5rem',
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
          style={{ height: '0.6rem' }}
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
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Oswald',
              fontWeight: '400',
              '@media (max-width:768px)': { fontSize: '32px' },
            }}
          >
            Portfolio
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
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
            {projects.map(project => (
              <Grid key={project.title} item xs={12} sm={6} md={4}>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt="Project Image"
                    sx={{
                      width: '100%',
                      height: '32rem',
                      objectFit: 'cover',
                      cursor: 'pointer',
                      boxShadow: '0 .125rem .625rem rgba(0, 0, 0, 0.2)',
                      transition: '0.15s',
                      '&:hover': {
                        boxShadow: '0 .25rem 1.1rem rgba(0, 0, 0, 0.4)',
                        borderRadius: '2rem',
                        transition: '0.15s',
                      },
                    }}
                  />
                </Link>
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
                    sx={{
                      fontFamily: 'Raleway',
                      fontSize: '18px',
                      cursor: 'pointer',
                    }}
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
