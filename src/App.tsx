import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ListingDetail from './pages/ListingDetail';
import CreateListing from './pages/CreateListing';
import Messages from './pages/Messages';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/listing/:id' component={ListingDetail} />
        <Route path='/create-listing' component={CreateListing} />
        <Route path='/messages' component={Messages} />
      </Switch>
    </Router>
  );
};

export default App;