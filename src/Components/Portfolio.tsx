import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
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
    title: 'NueAesthetic Webshop',
    image: './src/assets/nueAst.png',
  },
  {
    title: 'Task & Project Management App',
    image: './src/assets/smarttask.png',
  },
];

function Portfolio() {
  return (
    <Container>
      {projects.map((project) => (
        <Card key={project.title} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt="Project Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Container>
  );
}

export default Portfolio;
