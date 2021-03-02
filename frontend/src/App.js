import '../src/Resources/App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';


function App() {
  return (
    <Router>
      <Navigation />
      <Footer/>
    </Router>

  )
}

export default App;
