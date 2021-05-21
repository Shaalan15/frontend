// Importing React
import React from 'react';
// Importing the HomePage
import HomePage from './components/mainPage/HomePage';
// Importing LayoutRoute
import LayoutRoute from './LayoutRoute';
import LayoutRoute2 from './LayoutRoute2';
// Importing Login page
import LoginPage from './components/registration/LoginPage';
// Importing Registration page
import SignupPage from './components/registration/SignupPage';
// Importing User Profile
import Profile from './components/userProfile/Profile';
// Importing css
import './App.css'
// Importing the react-router things needed
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Challenges from './components/challenges/ChallengePage';
import ArtGallery from './components/mainPage/ArtGallery';
import ProductRegistration from './components/misc/ProductPages/AddProduct';
import ProductPage from './components/misc/ProductPages/Productcomp';

// Actual App function, has our code
function App() {
  return (

    <Router>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomePage} />
        <LayoutRoute2 path="/login" exact={true} component={LoginPage} />
        <LayoutRoute2 path="/register" exact={true} component={SignupPage} />
        <LayoutRoute2 path="/user" exact={true} component={Profile} />
        <LayoutRoute path="/product" exact = {true} component ={ArtGallery} />
        <LayoutRoute path="/challenges" exact = {true} component ={Challenges} />
        <LayoutRoute path="/product/add" exact = {true} component ={ProductRegistration} />
        <LayoutRoute path="/productpage" exact = {true} component ={ProductPage} />

      </Switch>
    </Router>

  );
}

export default App;
