import React from "react";
import FindUsComponent from "../Components/FindUsComponent";
import HeaderSection from "../Components/Header";
import Footer from "../Components/footer"; 
import CompetenceCard from "../Components/CompetenceCardComponent";
import treePic from "../assets/tree.jpeg"

const cardData = [
  {
    imgSrc: {treePic},
    title: "Title 1",
    text: "This is the text for the first card."
  },
  {
    imgSrc: {treePic} ,
    title: "Title 2",
    text: "This is the text for the second card."
  },
  {
    imgSrc: {treePic},
    title: "Title 3",
    text: "This is the text for the third card."
  },
  {
    imgSrc: {treePic},
    title: "Title 4",
    text: "This is the text for the fourth card."
  }
];

const HomePage: React.FC = () => {
  return (
    <>
      <header>
        <HeaderSection />
      </header>
      <main>
        {cardData.map((card, index) => (
          <CompetenceCard
            key={index}
            imageSrc={treePic}
            title={card.title}
            description={card.text}
          />
        ))}
        <FindUsComponent />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
