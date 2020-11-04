import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.css';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router';

import register from './components/LoginPage/ArtistLogin';
import profile from './containers/profile/profile';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Aplaudo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/register" class="nav-link" href="#">Register</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/profile" class="nav-link" href="#">Profile</NavLink>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <Route path="/register" component={register}/>
      <Route path="/profile" component={profile}/>
    </div>
  );
}

export default App;