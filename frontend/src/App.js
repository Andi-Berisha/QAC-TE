import '../src/Resources/App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Home from './Pages/HomePage';
import ListingsPage from './Pages/WhatsOn/ListingsPage';
import DiscussionPage from './Pages/Discussion Board/DiscussionPage';
import ContactPage from './Pages/ContactUs/ContactPage';
import LocalAttractionsPage from './Pages/PlacesToGo/LocalAttractionsPage';
import BookingsPage from './Pages/BookingsAndPayment/BookingsPage';
import PaymentPage from './Pages/BookingsAndPayment/PaymentPage';
import FilmClassification from './Pages/Classification/FilmClassification';
import ScreenInfo from './Pages/Screen Info/ScreenInfo';
import AboutUs from './Pages/AboutUsPage';
import OpeningTimes from './Pages/OpeningTimes';



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
        <Route path="/contactUs" exact>
          <ContactPage />
        </Route>
        <Route path="/localAttractions" exact>
          <LocalAttractionsPage />
         </Route>
        <Route path="/bookings" >
          <BookingsPage/>
        </Route>
        <Route path="/payment" >
          <PaymentPage/>
    </Route>
        <Route path="/FilmClassifications" >
         <FilmClassification/>
        </Route>
        <Route path="/screens" >
        <ScreenInfo/>
        </Route>
        <Route path="/aboutUs" exact>
          <AboutUs/>
        </Route>
        <Route path="/openingTimes" exact>
          <OpeningTimes/>
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
