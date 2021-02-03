import './App.css';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-showcase">
          <Button variant="contained" >Default</Button>
        </div>
      <div>
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;
