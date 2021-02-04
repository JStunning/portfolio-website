import './App.css';
import Navbar from './components/Navbar';
import AppShowcase from './components/AppShowcase'
import Skills from './components/Skills';
import Jobs from './components/Jobs';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AppShowcase />
      <div>
        <Skills />
      </div>
      <div>
        <Jobs />
      </div>
      <div>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
