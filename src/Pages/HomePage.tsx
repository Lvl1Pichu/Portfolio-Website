
import React from "react";
import ContactForm from "../Components/ContactForm";
import FindUsComponent from "../Components/FindUsComponent";
import HeaderSection from "../Components/Header";
import TeamSection from '../Components/TeamSection';
import Footer from "../Components/footer";

const HomePage: React.FC = () => {
  return (
    <>
    <header>
        <HeaderSection />
     </header>      
     <main>
        <TeamSection />
        <FindUsComponent />
        <ContactForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
