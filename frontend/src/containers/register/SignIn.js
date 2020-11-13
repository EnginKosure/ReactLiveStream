import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../actions';
import "./register.css";
import aplaudo from '../../assets/aplaudo.png';

import BootstrapCarousel from '../Carousel/Carousel';
import About from '../About/About';



const Register = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [inputs, setInputs] = useState({
    EmailAddress: '',
    Password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { EmailAddress, Password } = inputs;
  const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (EmailAddress && Password) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(userActions.login(EmailAddress, Password, from));
    }
  }

  return (
    <div>
      <div className="signin-container">
        <div className="logo">
          <img src={aplaudo} alt="Logo" className="logo" />
        </div>
        <div className="login-wrapper">

          <div className="auth-inner">
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card photo"
            />
            <form className="container" name="form" onSubmit={handleSubmit}>
              <h3>Sign In</h3>
              <div className="form-group">
                <label htmlFor="EmailAddress">Email address</label>
                <input
                  type="email"
                  name="EmailAddress"
                  className={'form-control email' + (submitted && !EmailAddress ? ' is-invalid' : '')}
                  value={EmailAddress}
                  placeholder="Enter email"
                  onChange={handleChange}
                />
                {submitted && !EmailAddress &&
                  <div className="invalid-feedback">Email is required</div>
                }
              </div>
              <div className="form-group">
                <label htmlFor="Password" >Password</label>
                <input
                  type="password"
                  name="Password"
                  className={"form-control password" + (submitted && !Password ? " is-invalid" : "")}
                  value={Password}
                  placeholder="Enter password"
                  onChange={handleChange}
                />
                {submitted && !Password &&
                  <div className="invalid-feedback">Password is required</div>
                }
              </div>
              <div className="form-group">
                <button className="btn btn-primary">
                  {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                          Login
                      </button>
                <Link to="/signup" className="btn btn-link">Register</Link>
              </div>
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </form>
          </div>
        </div>

      </div>
      <div className="contanier">
        <BootstrapCarousel/> 
      </div>
      <div className="contanier">
        <About/> 
      </div>
    </div>
  );
};
export default Register;