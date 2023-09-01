import React from 'react';
import Footer from '../Components/footer'; // Adjust the path as needed based on your project structure
import { useParams } from 'react-router-dom';

const DetailsPage: React.FC = () => {
interface PersonDetailParams {
    [key: string]: string | undefined;
    name: string;
}


  const { name } = useParams<PersonDetailParams>();
  let description = "";
  let image = "";

  switch (name) {
    case "Nathalie":
      description = "Description for Nathalie";
      image = "/path/to/nathalie.png";
      break;
    case "Jenny":
      description = "Description for Jenny";
      image = "/path/to/jenny.png";
      break;
    case "Sebastian":
      description = "Description for Sebastian";
      image = "/path/to/sebastian.png";
      break;
    case "Linus":
      description = "Description for Linus";
      image = "/path/to/linus.png";
      break;
    case "Carl":
      description = "Description for Carl";
      image = "/path/to/carl.png";
      break;
    default:
      description = "Default description";
      image = "/path/to/default.png";
  }

  return (
    <>
      <header></header>
      <main>
        <h1>{name}</h1>
        <p>{description}</p>
        <img src={image} alt={name} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default DetailsPage;
