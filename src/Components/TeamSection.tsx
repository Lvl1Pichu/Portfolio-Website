import { Box, CardMedia, Link, Typography } from '@mui/material';

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
              <Link
                href="/detailsPage/Jenny"
                sx={{
                  cursor: 'pointer',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                Jenny Weijland
              </Link>
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '20px',
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
          <Link
            href="/detailsPage/Jenny"
            sx={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }}
          >
            <img
              style={{ marginRight: '1rem', height: '0.6rem' }}
              src="arrow.png"
              alt=""
            />
            <Box
              component="span"
              sx={{
                fontSize: '16px',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationThickness: '0.05rem',
                  textUnderlineOffset: '0.15rem',
                },
              }}
            >
              READ MORE
            </Box>
          </Link>
        </Box>
        <Box
          sx={{
            '@media (max-width:768px)': { margin: '0 auto', maxWidth: '100wv' },
          }}
        >
          <Link href="/detailsPage/Jenny">
            <CardMedia
              component="img"
              image="./jenny.png"
              alt="Jenny"
              sx={{
                width: '20rem',
                height: '20rem',
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
          <Link href="/detailsPage/Carl">
            <CardMedia
              component="img"
              image="./carl.png"
              alt="Carl"
              sx={{
                width: '20rem',
                height: '20rem',
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
              <Link
                href="/detailsPage/Carl"
                sx={{
                  cursor: 'pointer',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                Carl Hasselblad
              </Link>
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '20px',
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
          <Link
            href="/detailsPage/Carl"
            sx={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }}
          >
            <img
              style={{ marginRight: '1rem', height: '0.6rem' }}
              src="arrow.png"
              alt=""
            />
            <Box
              component="span"
              sx={{
                fontSize: '16px',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationThickness: '0.05rem',
                  textUnderlineOffset: '0.15rem',
                },
              }}
            >
              READ MORE
            </Box>
          </Link>
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
              <Link
                href="/detailsPage/Sebastian"
                sx={{
                  cursor: 'pointer',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                Sebastian Johansson
              </Link>
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '20px',
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
          <Link
            href="/detailsPage/Sebastian"
            sx={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }}
          >
            <img
              style={{ marginRight: '1rem', height: '0.6rem' }}
              src="arrow.png"
              alt=""
            />
            <Box
              component="span"
              sx={{
                fontSize: '16px',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationThickness: '0.05rem',
                  textUnderlineOffset: '0.15rem',
                },
              }}
            >
              READ MORE
            </Box>
          </Link>
        </Box>
        <Box sx={{ '@media (max-width:768px)': { margin: '0 auto' } }}>
          <Link href="/detailsPage/Sebastian">
            <CardMedia
              component="img"
              image="./sebbe.png"
              alt="Sebastian"
              sx={{
                width: '20rem',
                height: '20rem',
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
          <Link href="/detailsPage/Linus">
            <CardMedia
              component="img"
              image="./linus.png"
              alt="Linus"
              sx={{
                width: '20rem',
                height: '20rem',
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
              <Link
                href="/detailsPage/Linus"
                sx={{
                  cursor: 'pointer',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                Linus Hammarberg
              </Link>
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '20px',
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
          <Link
            href="/detailsPage/Linus"
            sx={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }}
          >
            <img
              style={{ marginRight: '1rem', height: '0.6rem' }}
              src="arrow.png"
              alt=""
            />
            <Box
              component="span"
              sx={{
                fontSize: '16px',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationThickness: '0.05rem',
                  textUnderlineOffset: '0.15rem',
                },
              }}
            >
              READ MORE
            </Box>
          </Link>
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
              <Link
                href="/detailsPage/Nathalie"
                sx={{
                  cursor: 'pointer',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                Nathalie Gustafsson
              </Link>
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '20px',
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
          <Link
            href="/detailsPage/Nathalie"
            sx={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }}
          >
            <img
              style={{ marginRight: '1rem', height: '0.6rem' }}
              src="arrow.png"
              alt=""
            />
            <Box
              component="span"
              sx={{
                fontSize: '16px',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationThickness: '0.05rem',
                  textUnderlineOffset: '0.15rem',
                },
              }}
            >
              READ MORE
            </Box>
          </Link>
        </Box>
        <Box sx={{ '@media (max-width:768px)': { margin: '0 auto' } }}>
          <Link href="/detailsPage/Nathalie">
            <CardMedia
              component="img"
              image="./nathalie.png"
              alt="Nathalie"
              sx={{
                width: '20rem',
                height: '20rem',
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
        </Box>
      </Box>
    </Box>
  );
}

export default TeamSection;
