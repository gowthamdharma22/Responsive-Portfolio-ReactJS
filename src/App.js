import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import './App.css';
import React from 'react';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer';
import Scrollup from './components/Scrollup/Scrollup';
import Lottie from 'lottie-react';
import loading from './Loading.json';

function App() {
  const [loadingCompleted, setLoadingCompleted] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoadingCompleted(true), 3000);
  }, []);
  return (
    <div className="App">
      {!loadingCompleted ? (
        <div className="loading-animation">
          <Lottie animationData={loading} />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />
          <Footer />
          <Scrollup />
        </>
      )}
    </div>
  );
}

export default App;
