import '../src/Resources/App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Home from './Pages/HomePage';
import ListingsPage from './Pages/ListingsPage';
import DiscussionPage from './Pages/Discussion Board/DiscussionPage';
import BookingsPage from './Pages/BookingsAndPayment/BookingsPage';
import PaymentPage from './Pages/BookingsAndPayment/PaymentPage';



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
        <Route path="/bookings" >
          <BookingsPage/>
        </Route>
        <Route path="/payment" >
          <PaymentPage/>
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
