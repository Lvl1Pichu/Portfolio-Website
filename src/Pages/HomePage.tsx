import { Container } from '@mui/material';
import React from 'react';
import ContactForm from '../Components/ContactForm';
import FindUsComponent from '../Components/FindUsComponent';
import HeaderSection from '../Components/Header';
import TeamSection from '../Components/TeamSection';
import Footer from '../Components/footer';

const HomePage: React.FC = () => {
  return (
    <div className="body">
      <header>
        <HeaderSection />
      </header>
      <main>
        <Container>
          <TeamSection />
          <FindUsComponent />
          <ContactForm />
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
