import React, { Component } from "react";
// import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/Home/Home";
import DescriptionPage from "./Description";
import SignUpPage from "./components/SignUp/Signup";
import SignInPage from "./components/SignUp/Signin";
import AboutPage from "./components/About/landing";
import MyHome from './components/UserProfile/MyHome'
import AddPetition from './components/AddPetition/AddPetition';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/description/:id" component={DescriptionPage} />
          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/about" component={AboutPage} />
            <Route exact path="/myhome"
            component={MyHome}/>
            <Route exact path="/add"
            component={AddPetition}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
