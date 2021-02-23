import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <HomePage />
      </div>
      <Footer />
    </>
  );
}

export default App;
