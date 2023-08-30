import React from 'react';
import FindUsComponent from '../Components/FindUsComponent';
import TeamSection from '../Components/TeamSection';
import Footer from '../Components/footer'; // Adjust the path as needed based on your project structure

const HomePage: React.FC = () => {
  return (
    <>
      <header></header>
      <main>
        <TeamSection />
        <FindUsComponent />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
