import '../src/Resources/App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Home from './Pages/HomePage';


function App() {
  return (
    <Router>
      <Navigation />
      <Footer/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
