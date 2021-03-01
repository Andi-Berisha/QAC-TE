import '../src/Resources/App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterPage from './Footer';


function App() {
  return (
    <Router>
      <Navigation />
      {/* <FooterPage/> */}
    </Router>

  )
}

export default App;
