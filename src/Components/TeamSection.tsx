import { Box, Typography } from '@mui/material';
import { FaReact, FaSwift, FaFigma, FaSass } from 'react-icons/fa'; // Import the relevant icons

function TeamSection() {

  const iconContainerStyles = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    display: 'flex',
    gap: '1rem',
    padding: '0.5rem',
    alignItems: 'center',
    justifyContent: 'center',
  };

  
  return (
    <Box
      sx={{
        '@media (max-width:400px)': {
          // padding: '0',
          // margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          Gap: '0',
        },
        fontFamily: 'Raleway',
      }}
      id="team-section"
    >
      <Box
        sx={{
          width: '100%',
          borderBottom: '0.15rem solid black',
          marginBottom: '5rem',
          paddingBottom: '1rem',
          marginTop: '5rem',
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
          The team
        </Typography>
      </Box>

      {/* Person 1 */}

      <Box
        sx={{
          display: 'flex',
          gap: '2rem',
          '@media (max-width:768px)': {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '@media (max-width:768px)': { order: 2 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <Box
              component="h2"
              sx={{
                fontSize: '40px',
                margin: '0',
                color: '#522E07',
                fontFamily: 'Oswald',
                '@media (max-width:768px)': { fontSize: '24px' },
              }}
            >
              Jenny Weijland
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '24px',
                '@media (max-width:768px)': {
                  marginBottom: '1rem',
                  fontSize: '16px',
                },
              }}
            >
              Discover Jenny's realm: an adept in TypeScript, a maven in UX, and
              a PHP enthusiast. Merging her love for nature with digital
              landscapes, she crafts experiences as serene as a woodland trail.
            </Box>
          </Box>
          <Box>
            {' '}
            <img style={{ marginRight: '1rem' }} src="arrow.png" alt="" />
            <Box component="span" sx={{ fontSize: '20px', cursor: 'pointer' }}>
              READ MORE!
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'relative',
            '@media (max-width:768px)': { margin: '0 auto' },
          }}
        >
          <img src="jenny.png" alt="" />
          <Box sx={{ ...iconContainerStyles }}>
            <FaReact size={24} />{' '}
            {/* Using React icon as a placeholder for TypeScript */}
            <FaFigma size={24} /> {/* Using Figma for UX */}
            {/* Add PHP icon here once available */}
          </Box>
        </Box>
      </Box>

      {/* Person 2 */}

      <Box
        sx={{
          display: 'flex',
          gap: '2rem',
          marginTop: '4rem',
          '@media (max-width:768px)': { flexDirection: 'column' },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            '@media (max-width:768px)': { margin: '0 auto' },
          }}
        >
          <img src="carl.png" alt="" />
          <Box sx={{ ...iconContainerStyles }}>
            <FaReact size={24} />{' '}
            {/* Using React icon as a placeholder for TypeScript */}
            <FaFigma size={24} /> {/* Using Figma for UX */}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Box
              component="h2"
              sx={{
                fontSize: '40px',
                margin: '0',
                color: '#522E07',
                fontFamily: 'Oswald',
                '@media (max-width:768px)': { fontSize: '24px' },
              }}
            >
              Carl Hasselblad
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '24px',
                '@media (max-width:768px)': {
                  marginBottom: '1rem',
                  fontSize: '16px',
                },
              }}
            >
              Meet Carl: a passionate UX enthusiast, TypeScript aficionado, and
              a loyal dog lover. With a flair for user-centric design and code
              precision, he finds joy in every wagging tail and pixel-perfect
              interface. Dive into his world where creativity meets canine
              companionship.
            </Box>
          </Box>
          <Box>
            {' '}
            <img style={{ marginRight: '1rem' }} src="arrow.png" alt="" />
            <Box component="span" sx={{ fontSize: '20px', cursor: 'pointer' }}>
              READ MORE!
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Person 3 */}

      <Box
        sx={{
          display: 'flex',
          gap: '2rem',
          marginTop: '4rem',
          '@media (max-width:768px)': { flexDirection: 'column' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '@media (max-width:768px)': { order: 2 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <Box
              component="h2"
              sx={{
                fontSize: '40px',
                margin: '0',
                color: '#522E07',
                fontFamily: 'Oswald',
                '@media (max-width:768px)': { fontSize: '24px' },
              }}
            >
              Sebastian Johansson
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '24px',
                '@media (max-width:768px)': {
                  marginBottom: '1rem',
                  fontSize: '16px',
                },
              }}
            >
              Step into Sebbe's domain: the ultimate coding maestro, fluent in
              every programming dialect. His passion for martial arts mirrors
              his approach to code - precise, powerful, and always ahead of the
              game. As the alpha in every room, Sebbe commands respect in both
              tech and technique.
            </Box>
          </Box>
          <Box>
            {' '}
            <img style={{ marginRight: '1rem' }} src="arrow.png" alt="" />
            <Box
              component="span"
              sx={{
                fontSize: '20px',
                cursor: 'pointer',
              }}
            >
              READ MORE!
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'relative',
            '@media (max-width:768px)': { margin: '0 auto' },
          }}
        >
          <img src="sebbe.png" alt="" />
          <Box sx={{ ...iconContainerStyles }}>
            <FaReact size={24} />{' '}
            {/* Using React icon as a representative for coding */}
            {/* Add more icons as needed */}
          </Box>
        </Box>
      </Box>

      {/* Person 4 */}

      <Box
        sx={{
          display: 'flex',
          gap: '2rem',
          marginTop: '4rem',
          '@media (max-width:768px)': { flexDirection: 'column' },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            '@media (max-width:768px)': { margin: '0 auto' },
          }}
        >
          <img src="linus.png" alt="" />
          <Box sx={{ ...iconContainerStyles }}>
            <FaReact size={24} />{' '}
            {/* Using React icon as a placeholder for TypeScript */}
            <FaFigma size={24} /> {/* Using Figma for UX */}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Box
              component="h2"
              sx={{
                fontSize: '40px',
                margin: '0',
                color: '#522E07',
                fontFamily: 'Oswald',
                '@media (max-width:768px)': { fontSize: '24px' },
              }}
            >
              Linus Hammarberg
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '24px',
                '@media (max-width:768px)': {
                  marginBottom: '1rem',
                  fontSize: '16px',
                },
              }}
            >
              Meet Linus: a passionate UX enthusiast, TypeScript aficionado, and
              a loyal dog lover. With a flair for user-centric design and code
              precision, he finds joy in every wagging tail and pixel-perfect
              interface. Dive into his world where creativity meets canine
              companionship.
            </Box>
          </Box>
          <Box>
            {' '}
            <img style={{ marginRight: '1rem' }} src="arrow.png" alt="" />
            <Box component="span" sx={{ fontSize: '20px', cursor: 'pointer' }}>
              READ MORE!
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Person 5 */}
      <Box
        sx={{
          display: 'flex',
          gap: '2rem',
          marginTop: '4rem',
          '@media (max-width:768px)': { flexDirection: 'column' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '@media (max-width:768px)': { order: 2 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <Box
              component="h2"
              sx={{
                fontSize: '40px',
                margin: '0',
                color: '#522E07',
                fontFamily: 'Oswald',
                '@media (max-width:768px)': { fontSize: '24px' },
              }}
            >
              Nathalie Gustafsson
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '24px',
                '@media (max-width:768px)': {
                  marginBottom: '1rem',
                  fontSize: '16px',
                },
              }}
            >
              Welcome to Nathalie's board: where Swift meets Figma and React
              dances to the rhythm of Scrum. An expert with a penchant for board
              games, she designs and strategizes, ensuring every move is a
              winning one.
            </Box>
          </Box>
          <Box>
            <img style={{ marginRight: '1rem' }} src="arrow.png" alt="" />
            <Box
              component="span"
              sx={{
                fontSize: '20px',
                cursor: 'pointer',
              }}
            >
              READ MORE!
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'relative',
            '@media (max-width:768px)': { margin: '0 auto' },
          }}
        >
          <img src="nathalie.png" alt="" />

          <Box
            sx={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              display: 'flex',
              gap: '1rem',
              padding: '0.5rem',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FaReact size={24} />
            <FaSwift size={24} />
            <FaFigma size={24} />
            <FaSass size={24} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default TeamSection;
