import '../src/Resources/App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Home from './Pages/HomePage';
import ListingsPage from './Pages/ListingsPage';
import DiscussionPage from './Pages/Discussion Board/DiscussionPage';
import FilmClassification from './Pages/Classification/FilmClassification';
import ScreenInfo from './Pages/Screen Info/ScreenInfo';



function App() {
  return (
    <Router>
      <Navigation />
      <Footer />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/whatsOn" >
          <ListingsPage />
        </Route>
        <Route path="/discussionBoard" >
          <DiscussionPage />
        </Route>
        <Route path="/FilmClassifications" >
         <FilmClassification/>
        </Route>
        <Route path="/screens" >
        <ScreenInfo/>
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
