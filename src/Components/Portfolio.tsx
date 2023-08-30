import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
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
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
          {projects.map((project) => (
            <Grid key={project.title} item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt="Project Image"
                    sx={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography
                      gutterBottom
                      component="div"
                      sx={{ fontFamily: 'Raleway', fontSize: '18px' }}
                    >
                      {project.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Portfolio;

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.subtitle2,
//   textAlign: 'left',
//   color: theme.palette.text.primary,
//   cursor: 'pointer',
//   boxShadow: 'none',
//   transition: 'box-shadow 0.3s ease-in-out',
//   '&:hover': {
//     boxShadow: '0 .125rem .625rem rgba(0, 0, 0, 0.2)',
//     backgroundColor: '#FFFFFF',
//   },
//   '& img': {
//     width: '100%',
//     height: 'auto',
//     objectFit: 'cover',
//   },
// }));
