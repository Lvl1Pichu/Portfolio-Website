import React from 'react';
import Footer from '../Components/footer'; // Adjust the path as needed based on your project structure
import FindUsComponent from '../Components/FindUsComponent';

const HomePage: React.FC = () => {
    return (
      <>
        <header></header>
        <main><FindUsComponent></FindUsComponent></main>
        <footer>
            <Footer />
        </footer>
      </>
  );
};

export default HomePage;
