import { Box, Typography } from '@mui/material';

function TeamSection() {
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
            '@media (max-width:768px)': { margin: '0 auto', maxWidth: '100wv' },
          }}
        >
          <img style={{}} src="jenny.png" alt="" />
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
        <Box sx={{ '@media (max-width:768px)': { margin: '0 auto' } }}>
          <img style={{ objectFit: 'cover' }} src="carl.png" alt="" />
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
        <Box sx={{ '@media (max-width:768px)': { margin: '0 auto' } }}>
          <img src="sebbe.png" alt="" />
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
        <Box sx={{ '@media (max-width:768px)': { margin: '0 auto' } }}>
          <img style={{ objectFit: 'cover' }} src="linus.png" alt="" />
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
              Welcome to Nathalie's board: where Swift meets Figma and
              TypeScript dances to the rhythm of Scrum. An expert with a
              penchant for board games, she designs and strategizes, ensuring
              every move is a winning one.
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
        <Box sx={{ '@media (max-width:768px)': { margin: '0 auto' } }}>
          <img src="nathalie.png" alt="" />
        </Box>
      </Box>
    </Box>
  );
}

export default TeamSection;
