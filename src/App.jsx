import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Work from './pages/Work';
import OtherWork from './pages/OtherWork';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Work />
      <OtherWork />
      <Contact />
    </div>
  );
}

export default App;
