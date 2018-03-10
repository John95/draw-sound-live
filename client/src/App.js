import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from "./components/Landing";
import Login from "./components/Login";
import Venue from "./components/Venue";
import LoginPage from './components/Auth/LoginPage';
import io from 'socket.io-client';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>

            {/* for testing... */}
          <Route exact path="/" component={Venue} />
            


            {/* <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/venue" component={Venue} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
