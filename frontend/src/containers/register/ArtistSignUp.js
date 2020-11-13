import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../actions';
import "./register.scss";
import aplaudo from '../../assets/logo.png'
import Search from '../../components/Search';



const ArtistSignUp = () => {

    // {
    //     "ArtistFirstName": "Bin",
    //     "ArtistLastName": "Barly",
    //     "ArtistNickName": "Barlo",
    //     "EmailAddress": "rass@gmail.com",
    //     "Password": "123dwccetere"
    // }
    // const [name, setName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [nickName, setNickName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const [user, setUser] = useState({
        ArtistPhoto: '',
        ArtistFirstName: '',
        ArtistLastName: '',
        EmailAddress: '',
        Password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.ArtistFirstName && user.ArtistLastName && user.EmailAddress && user.Password) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div className="main-container">
            <div className="left-container">
                <div className="logo-container">
                    <img src={aplaudo} alt="Logo" className="logo" />
                </div>
                <div className="search-component">
                    <Search />
                </div>
            </div>
            <div className="auth-inner">
                <form className="container" name="form" onSubmit={handleSubmit}>
                    <h4 className="text">Register for a free account</h4>
                    <div className="form-group">
                        <label htmlFor="ArtistFirstName" />
                        <input
                            type="text"
                            name="ArtistFirstName"
                            className={"form-control email text-fields" + (submitted && !user.ArtistFirstName ? ' is-invalid' : '')}
                            value={user.ArtistFirstName}
                            placeholder="First name"
                            onChange={handleChange}
                        />
                        {submitted && !user.ArtistFirstName &&
                            <div className="invalid-feedback">First Name is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <label htmlFor="ArtistLastName" />
                        <input
                            type="text"
                            name="ArtistLastName"
                            className={"form-control email text-fields" + (submitted && !user.ArtistLastName ? ' is-invalid' : '')}
                            value={user.ArtistLastName}
                            placeholder="Last name"
                            onChange={handleChange}
                        />
                        {submitted && !user.ArtistLastName &&
                            <div className="invalid-feedback">Last Name is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <label htmlFor="EmailAddress" />
                        <input
                            type="email"
                            name="EmailAddress"
                            className={"form-control email text-fields" + (submitted && !user.EmailAddress ? ' is-invalid' : '')}
                            value={user.EmailAddress}
                            placeholder="Email address"
                            onChange={handleChange}
                        />
                        {submitted && !user.EmailAddress &&
                            <div className="invalid-feedback">Email is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password" />
                        <input
                            type="password"
                            name="Password"
                            className={"form-control password" + (submitted && !user.Password ? ' is-invalid' : '')}
                            value={user.Password}
                            placeholder="Create password"
                            onChange={handleChange}
                        />
                        {submitted && !user.Password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-custom">
                            {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
                        <Link to="/signin" className="btn btn-link fgpw">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default ArtistSignUp;