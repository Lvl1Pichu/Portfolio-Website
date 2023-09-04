import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DetailsPage from './Pages/DetailsPage';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProjectPage" element={<ProjectPage />} />
        <Route path="/detailsPage/:name" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
