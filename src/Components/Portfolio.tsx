import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';

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
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%', borderBottom: '0.15rem solid black', marginBottom: "5rem", paddingBottom: "1rem" }}>
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
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 3, md: 5 }}>
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
    </Container>
  );
}

export default Portfolio;

// <Card sx={{ width: '80%' }}>

// <CardContent sx={{ textAlign: 'center' }}>
//   <Typography
//     gutterBottom
//     component="div"
//     sx={{ fontFamily: 'Raleway', fontSize: '18px' }}
//   >
//     {project.title}
//   </Typography>
// </CardContent>
// </Card>

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

// <ImageList sx={{ width: 500, height: 450 }}>
// {itemData.map((item) => (
//   <ImageListItem key={item.img}>
//     <img
//       src={`${item.img}?w=248&fit=crop&auto=format`}
//       srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//       alt={item.title}
//       loading="lazy"
//     />
//     <ImageListItemBar
//       title={item.title}
//       subtitle={<span>by: {item.author}</span>}
//       position="below"
//     />
//   </ImageListItem>
// ))}
// </ImageList>
