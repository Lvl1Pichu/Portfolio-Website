import React, { useEffect, useState } from 'react';
import BlackMenu from '../Components/BlackMenu';
import BlackMobileMenu from '../Components/BlackMobileMenu';
import Portfolio from '../Components/Portfolio';
import Footer2 from '../Components/footer2';

const ProjectPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    document.title = 'Best Website | Portfolio';
  }, []);

  // Listen for window resize and adjust `isMobile` accordingly
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isMobile ? <BlackMobileMenu /> : <BlackMenu />}
      </header>
      <main>
        <Portfolio />
      </main>
      <footer>
        <Footer2 />
      </footer>
    </>
  );
};

export default ProjectPage;
