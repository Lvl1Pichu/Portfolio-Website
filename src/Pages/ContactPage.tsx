import React from "react";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/footer";

const ContactPage: React.FC = () => {
  return (
    <>
      <header></header>
      <main>
        <ContactForm />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default ContactPage;
