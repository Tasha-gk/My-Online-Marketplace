import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ListingDetail from './pages/ListingDetail';
import CreateListing from './pages/CreateListing';
import Messages from './pages/Messages';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/listing/:id" element={<ListingDetail />} />
                <Route path="/create-listing" element={<CreateListing />} />
                <Route path="/messages" element={<Messages />} />
            </Routes>
        </Router>
    );
};

export default App;