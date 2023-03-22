import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import './App.css';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer';
import Scrollup from './components/Scrollup/Scrollup';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Project/>
      <Contact/>
      <Footer />
      <Scrollup />
    </div>
  );
}

export default App;
