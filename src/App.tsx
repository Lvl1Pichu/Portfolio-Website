import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project-page" element={<Page1 />} />
        <Route path="/Conact-us-page" element={<Page2 />} />
        <Route path="/details:id" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;
