import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import DetailsPage from "./Pages/DetailsPage";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/ProjectPage" element={<ProjectPage />} />
        <Route path="/detailsPage:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
