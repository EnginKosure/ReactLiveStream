// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Route } from 'react-router';
import Navbar from './containers/Navbar/Navbar';

import signin from './containers/Navbar/SignUp/SignUp';
import profile from './containers/Navbar/Profile/Profile';
import signup from './containers/ArtistSignUp'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path="/signin" component={signin} />
      <Route path="/signup" component={signup} />
      <Route path="/profile" component={profile} />
    </div>
  );
}

export default App;