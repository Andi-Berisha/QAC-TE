import '../src/Resources/App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Home from './Pages/HomePage';
import ListingsPage from './Pages/ListingsPage';
import StarRating from './Pages/StarRating';
import DiscussionBoard from './Pages/DiscussionBoard'


function App() {
  return (
    <Router>
      <Navigation />
      <Footer />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/whatsOn" exact>
          <ListingsPage />
        </Route>
        <Route path="/discussionBoard" exact>
          <DiscussionBoard/>
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
