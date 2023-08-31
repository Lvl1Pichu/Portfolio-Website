import React from "react";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/footer"; // Adjust the path as needed based on your project structure

const HomePage: React.FC = () => {
  return (
    <>
      <header></header>
      <main>
        <ContactForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
