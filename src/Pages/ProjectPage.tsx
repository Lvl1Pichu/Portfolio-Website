import React, { useState, useEffect } from 'react';
import Portfolio from '../Components/Portfolio';
import Footer from '../Components/footer'; // Adjust the path as needed based on your project structure
import BlackMenu from "../Components/BlackMenu";
import BlackMobileMenu from "../Components/BlackMobileMenu";

const ProjectPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
      <header style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}}>
        {isMobile ? <BlackMobileMenu/> : <BlackMenu />}
      </header>
      <main>
        <Portfolio />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ProjectPage;
