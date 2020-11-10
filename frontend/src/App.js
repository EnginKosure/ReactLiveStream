import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect } from 'react';
import { NavLink, Router, Switch, Redirect, Route } from 'react-router-dom';
// import { Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import signin from './containers/register/SignIn';
import profile from './containers/profile/profile';
import signup from './containers/register/ArtistSignUp';

import { history } from './helpers';
import { alertActions } from './actions';
import { PrivateRoute } from './components';
import RegisterHomePage from './containers/register/RegisterHomePage';
// import { LoginPage } from '../LoginPage';
// import { RegisterPage } from '../RegisterPage';

function App() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);
  return (
    <div className="App">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Aplaudo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signin" className="nav-link" href="#">Sign in</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link" href="#">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link" href="#">Profile</NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav> */}
      <div className="container">

        <div className="col-md-8 offset-md-2">
          {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={RegisterHomePage} />
              <Route path="/signin" component={signin} />
              <Route path="/signup" component={signup} />
              <Route path="/profile" component={profile} />
              <Redirect from="*" to="/" />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;