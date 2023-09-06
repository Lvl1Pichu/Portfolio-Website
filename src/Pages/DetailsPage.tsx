import {
  Box,
  Divider,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlackMenu from '../Components/BlackMenu';
import BlackMobileMenu from '../Components/BlackMobileMenu';
import ContactFormDetail from '../Components/ContactFormDetail';
import Footer from '../Components/footer'; // Adjust the path as needed based on your project structure

const DetailsPage: React.FC = () => {
  interface PersonDetailParams {
    [key: string]: string | undefined;
    name: string;
  }

  const { name } = useParams<PersonDetailParams>();
  let description = '';
  let image = '';
  let titles = '';
  let email = '';
  let phone = '';

  switch (name) {
    case 'Nathalie':
      description = `Welcome to Nathalie's board: where Swift meets Figma and TypeScript dances to the rhythm of Scrum. An expert with a penchant for board games, she designs and strategizes, ensuring every move is a winning one. Venturing deeper into Nathalie's realm, one discovers a harmonious blend of logical precision and aesthetic mastery. Every project is a chess match, and she’s always three steps ahead.
      Nathalie believes in the power of a well-defined strategy. Just as she navigates the complex terrains of Catan or the intricate conspiracies of Diplomacy, she meticulously maps out her digital projects. She has an innate ability to foresee challenges and plan contingencies, ensuring smooth execution and delivery. Her development skills in Swift are rivaled only by her flair for design in Figma, making her a double-threat in the tech world.
      Beyond her technical prowess, Nathalie thrives in collaborative environments. Drawing parallels from her love for board games, she understands the importance of teamwork, communication, and shared vision. With every sprint in Scrum, she ensures her team is aligned, motivated, and clear on their roles. Clients are consistently impressed by her ability to articulate complex processes in relatable terms, bridging the gap between tech jargon and business needs. 
      Nathalie's board is not just about work, though. It's a testament to her holistic approach to life and her belief that play and professionalism can coexist. Here, every project is a game, every challenge an opportunity, and every solution a triumphant checkmate. Dive into her world, and you'll be met with a symphony of innovation, strategy, and sheer passion.`;
      image = '../nathalie.png';
      titles = 'Creative lead/Code genius';
      email = 'nathalie@bestwebsite.com';
      phone = '+461234567';
      break;
    case 'Jenny':
      description = `Discover Jenny's realm: an adept in TypeScript, a maven in UX, and a PHP enthusiast. Merging her love for nature with digital landscapes, she crafts experiences as serene as a woodland trail. A seasoned traveler of both physical and digital terrains, Jenny possesses a unique ability to intuitively connect user expectations with technical nuances.
      In her projects, Jenny exhibits a predilection for solving complex challenges. She harbors a deep appreciation for intuitive design and prioritizes user-centric interfaces, ensuring that every digital touchpoint is as organic and seamless as the natural world she's so fond of. Her designs don't just look pretty – they feel right, evoking emotions and fostering connections.
      Jenny's expertise is not confined to the technical realm. She's a veritable bridge between the creative and logical, gracefully navigating between graphic artists and backend developers. Her ability to communicate complex ideas with clarity makes her an invaluable asset in cross-disciplinary teams. Clients often commend her for her proactive approach and her unyielding commitment to excellence. When she takes on a project, she not only delivers but elevates the whole team's standard.
      Beyond her hard skills, Jenny's professional demeanor shines in every interaction. She possesses a relentless drive, paired with a compassionate understanding of her client's visions. This allows her to effortlessly align her strategies with their objectives, ensuring every project is a harmonious blend of aesthetics, functionality, and business goals. Dive deeper into her portfolio, and you'll find a symphony of projects that stand testament to her multifaceted expertise and her passion for creating digital masterpieces.`;
      image = '../jenny.png';
      titles = 'Creative lead/ UX Design';
      email = 'jenny@bestwebsite.com';
      phone = '+461234567';
      break;
    case 'Sebastian':
      description = `Step into Sebbe's domain: the ultimate coding maestro, fluent in every programming dialect. His passion for martial arts mirrors his approach to code - precise, powerful, and always ahead of the game. As the alpha in every room, Sebbe commands respect in both tech and technique. In the vast digital landscape, he's the samurai who wields the sword of syntax with unmatched finesse.
      In the realm of coding, Sebbe doesn't just write programs—he composes symphonies of logic and function. Each line of code is like a practiced kata, reflecting the harmony between form and function. His deep understanding of multiple programming languages showcases his versatility, making him a sought-after virtuoso in the tech arena. His projects aren't just functional; they're masterpieces of digital craftsmanship.
      His dedication to martial arts provides a unique perspective on discipline and patience, translating seamlessly into his work. Like a martial artist awaiting the right moment to strike, Sebbe is methodical and patient, ensuring that every piece of code he writes is optimized for performance and scalability. His deep dives into the intricacies of algorithms are akin to the intricate katas he practices, each move deliberate and every outcome anticipated.
      Yet, beneath the steely demeanor lies an individual with a profound respect for collaboration and mentorship. Sebbe understands that true mastery is not just about individual brilliance but also about elevating those around him. He frequently engages in tech talks, sharing his vast reservoir of knowledge, and guiding budding programmers. This juxtaposition of strength and humility makes Sebbe an invaluable asset in any project or team.`;
      image = '../sebbe.png';
      titles = ' UX Design / Code genius';
      email = 'sebastian@bestwebsite.com';
      phone = '+461234567';
      break;
    case 'Linus':
      description = ` Meet Linus: a passionate UX enthusiast, TypeScript aficionado, and a loyal dog lover. With a flair for user-centric design and code precision, he finds joy in every wagging tail and pixel-perfect interface. Dive into his world where creativity meets canine companionship, and where every design has the heart of a story to tell.
      In Linus’s digital atelier, there’s a seamless blend between his love for aesthetic detail and his infatuation with the logical world of TypeScript. Just as he can read the subtle cues of his four-legged friend, he intuitively understands the unspoken needs of a user, translating them into interfaces that speak volumes. Each application, website, or software Linus touches echoes his mantra: simplicity, functionality, and empathy.
      The devotion he shows to his canine companion is mirrored in his dedication to UX. To Linus, every user is unique, deserving of an experience tailored just for them, and every project is a fresh opportunity to weave in human emotion and responsiveness. He doesn't just design; he crafts stories, ensuring that behind every interface is an emotion, a purpose, and a heartbeat.
      His journey in TypeScript has been marked by an unwavering commitment to perfection. While others may see just a programming language, Linus sees a canvas of unlimited potential. His codes aren’t merely functional – they are symphonies of logic and design, embodying the elegance and precision he admires in the canine world.
      Yet, beyond the screens and the scripts, Linus is a beacon of collaboration and growth. His workshops resonate with laughter, insights, and occasional barks, offering a blend of technical mastery and heartwarming anecdotes. Within his sphere, one doesn't merely learn about UX or TypeScript; they imbibe a philosophy where passion, precision, and companionship reign supreme. In Linus's universe, codes become tales, designs turn into narratives, and every wag is a nod to a job well done.
      `;
      image = '../linus.png';
      titles = 'Creative lead/  Code genius';
      email = 'linus@bestwebsite.com';
      phone = '+461234567';
      break;
    case 'Carl':
      description = `Step into Carl's realm: a fusion of vibrant visuals and harmonious sounds. As an astute graphic designer with a deep love for music, he orchestrates pixels and beats in a symphony of experiences. Known to many as the "Maestro of Multimedia", Carl crafts designs that not only capture the eye but also resonate with the soul.
      Every creation of Carl is like a symphonic movement – starting with a gentle buildup, reaching a crescendo, and then gracefully fading into a mesmerizing resolution. His love for music isn't just a hobby; it's a lens through which he views the world of design. Each layout, color scheme, or typography he chooses is influenced by the rhythms and melodies that constantly play in the background of his mind.
      While his graphical layouts might strike you first, the underlying harmony he incorporates is what makes Carl's creations truly memorable. Just as in music, where every note has its place, in Carl's designs, every element, be it a line, shape, or color, contributes to the composition's overall narrative. And this meticulous attention to detail is what sets him apart.
      Yet, beyond the monitor and the mixing console, Carl is a mentor to many. He believes that like in a band, collaboration is key. He often says, "Design and music both thrive on harmony, and harmony is achieved when every member understands their role and contributes to the collective melody." With Carl at the helm, projects become jam sessions, where ideas flow freely, and the final output is always a chart-topper.
      Embarking on a journey with Carl is like attending a grand concert. From the opening act to the encore, you're guaranteed a performance where visuals sing, designs dance, and where every project strikes the perfect chord.`;
      image = '../carl.png';
      titles = ' UX Design / Code genius';
      email = 'carl@bestwebsite.com';
      phone = '+461234567';
      break;
    default:
      description = 'Default description';
      image = 'deafult.png';
  }

  useEffect(() => {
    document.title = `Best Website | ${name}`;
  }, []);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <header
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isSmallScreen ? <BlackMobileMenu /> : <BlackMenu />}
      </header>{' '}
      <main>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              textAlign: 'left',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              paddingLeft: '2rem',
              boxSizing: 'border-box',
              alignItems: 'center',
            }}
          >
            <Link
              href="/"
              sx={{
                display: 'flex',
                gap: '0.7rem',
                alignItems: 'center',
                cursor: 'pointer',
                color: 'black',
                textDecoration: 'none',
                flexDirection: 'row',
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationThickness: '0.05rem',
                  textUnderlineOffset: '0.15rem',
                },
              }}
            >
              <img
                src="../../src/assets/arrowLeft.png"
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
          </Box>
          <Box
            sx={{
              width: '100%',
              maxWidth: '900px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem',
              boxSizing: 'border-box',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                height: isSmallScreen ? '10rem' : '15rem',
              }}
            >
              <Box
                sx={{
                  width: isSmallScreen ? '40%' : '30%',
                  marginRight: '1rem',
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></Box>
              <Box>
                <Box
                  component="h2"
                  sx={{
                    fontSize: isSmallScreen ? '30px' : '40px',
                    margin: '0',
                    color: 'black',
                    fontFamily: 'Oswald',
                  }}
                >
                  {name}
                </Box>
                <Typography
                  variant={isSmallScreen ? 'h7' : 'h6'}
                  fontFamily="'Raleway', sans-serif"
                  align="left"
                  gutterBottom
                >
                  {titles}
                  <br />
                  <a
                    href={`mailto:${email}`}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                  >
                    {email}
                  </a>
                  <br />
                  <a
                    href={`tel:${phone}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    {phone}
                  </a>
                  <br />
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                paddingTop: '5rem',
              }}
            >
              <Box
                component="h2"
                sx={{
                  fontSize: '40px',
                  margin: '0',
                  color: 'black',
                  fontFamily: 'Oswald',
                }}
              >
                Get in touch with {name}!
              </Box>
              <Divider
                sx={{
                  width: '100%',
                  margin: 'auto',
                  marginTop: '1rem',
                  marginBottom: '1rem',
                  borderBottom: '3px solid rgba(0, 0, 0, 0.999)',
                }}
              />
              <Typography
                variant="h5"
                fontFamily="'Raleway', sans-serif"
                align="center"
                maxWidth="600px"
                gutterBottom
              >
                Thank you for your interest in our services!
                <br /> <br />
                Please use the form below to get in touch with {name}. The
                message will be reviewed and you will receive a reply as soon as
                possible.
              </Typography>
              <ContactFormDetail />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '5rem',
              }}
            >
              <Box
                component="h2"
                sx={{
                  fontSize: '40px',
                  margin: '0',
                  color: 'black',
                  fontFamily: 'Oswald',
                  textAlign: 'center',
                }}
              >
                Special knowledge
              </Box>
              <Divider
                sx={{
                  width: '100%',
                  margin: 'auto',
                  marginTop: '1rem',
                  marginBottom: '1rem',
                  borderBottom: '3px solid rgba(0, 0, 0, 0.999)',
                }}
              />
              <Typography
                variant="h6"
                fontFamily="'Raleway', sans-serif"
                align="left"
                gutterBottom
              >
                {description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default DetailsPage;
