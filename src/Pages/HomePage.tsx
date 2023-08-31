import React from "react";
import FindUsComponent from "../Components/FindUsComponent";
import HeaderSection from "../Components/Header";
import Footer from "../Components/footer"; // Adjust the path as needed based on your project structure

const HomePage: React.FC = () => {
  return (
    <>
      <header>
        <HeaderSection />
      </header>
      <main>
        <FindUsComponent></FindUsComponent>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
