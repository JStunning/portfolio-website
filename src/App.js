import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Route exact path="/portfolio-website/" component={HomePage} />
        <Route exact path='/portfolio-website/contact'>
          <ContactPage />
        </Route>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
