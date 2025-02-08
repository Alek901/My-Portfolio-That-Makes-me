import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Jsx pages/Header';
import Footer from './Jsx pages/Footer';
import AboutMe from './Jsx pages/AboutMe';
import Portfolio from './Jsx pages/Portfolio';
import Contact from './Jsx pages/Contact';
import Resume from './Jsx pages/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app" style=  {null}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
