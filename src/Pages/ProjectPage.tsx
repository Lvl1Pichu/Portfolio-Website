import React from 'react';
import Portfolio from '../Components/Portfolio';
import Footer from '../Components/footer'; // Adjust the path as needed based on your project structure

const ProjectPage: React.FC = () => {
  return (
    <>
      <header></header>
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
