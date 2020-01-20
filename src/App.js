import React from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/classes/" component={Rooms} />
        <Route exact path="/classes/:slug" component={SingleRoom} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
