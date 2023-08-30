import React from 'react';
import TeamSection from '../Components/TeamSection';
import Footer from '../Components/footer'; // Adjust the path as needed based on your project structure

const HomePage: React.FC = () => {
  return (
    <>
      <header></header>
      <main>
        <TeamSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
