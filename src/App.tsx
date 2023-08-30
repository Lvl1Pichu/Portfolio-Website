import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import ProjectPage from './Pages/ProjectPage';
import DetailsPage from './Pages/DetailsPage';

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
