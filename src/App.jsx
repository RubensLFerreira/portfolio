import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Work from './pages/Work';
import OtherWork from './pages/OtherWork';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Work />
      <OtherWork />
    </div>
  );
}

export default App;
