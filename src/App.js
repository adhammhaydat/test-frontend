import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Home from './components/Home';
import FavFlowers from './components/FavFlowers';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './components/LoginButton';


class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
              
                {this.props.auth0.isAuthenticated? <Home/>:<LoginButton/> }
                {/* TODO: if the user is logged in, render the `Home` component, if they are not, render the `Login` component */}
              </Route>
              <Route exact path="/favFlowers">
                
                {this.props.auth0.isAuthenticated?<FavFlowers/>:<LoginButton/>}
                {/* TODO: if the user is logged in, render the `FavFlowers` component, if they are not, render the `Login` component */}
              </Route>
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
