import '../src/Resources/App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Home from './Pages/HomePage';
import ListingsPage from './Pages/ListingsPage';
import StarRating from './Pages/StarRating';
import DiscussionPage from './Pages/Discussion Board/DiscussionPage';
import ContactPage from './Pages/ContactUs/ContactPage';
import LocalAttractionsPage from './Pages/PlacesToGo/LocalAttractionsPage';



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
          <DiscussionPage />
        </Route>
        <Route path="/contactUs" exact>
          <ContactPage />
        </Route>
        <Route path="/localAttractions" exact>
          <LocalAttractionsPage />
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
