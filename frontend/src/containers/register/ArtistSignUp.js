import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../actions';
import "./register.css";

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
        ArtistNickName: '',
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
        <div className="login-wrapper">
            <div className="auth-inner">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card photo"
                />
                <form className="container" name="form" onSubmit={handleSubmit}>
                    <h3>Create an account</h3>
                    <div className="form-group">
                        <label htmlFor="ArtistFirstName">First name</label>
                        <input
                            type="text"
                            name="ArtistFirstName"
                            className={"form-control email" + (submitted && !user.ArtistFirstName ? ' is-invalid' : '')}
                            value={user.ArtistFirstName}
                            placeholder="Enter first name"
                            onChange={handleChange}
                        />
                        {submitted && !user.ArtistFirstName &&
                            <div className="invalid-feedback">First Name is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <label htmlFor="ArtistLastName">Last name</label>
                        <input
                            type="text"
                            name="ArtistLastName"
                            className={"form-control email" + (submitted && !user.ArtistLastName ? ' is-invalid' : '')}
                            value={user.ArtistLastName}
                            placeholder="Enter last name"
                            onChange={handleChange}
                        />
                        {submitted && !user.ArtistLastName &&
                            <div className="invalid-feedback">Last Name is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <label htmlFor="ArtistNickName">Nick name</label>
                        <input
                            type="text"
                            name="ArtistNickName"
                            className="form-control email"
                            value={user.ArtistNickName}
                            placeholder="Enter nick name"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="EmailAddress">Email address</label>
                        <input
                            type="email"
                            name="EmailAddress"
                            className={"form-control email" + (submitted && !user.EmailAddress ? ' is-invalid' : '')}
                            value={user.EmailAddress}
                            placeholder="Enter email"
                            onChange={handleChange}
                        />
                        {submitted && !user.EmailAddress &&
                            <div className="invalid-feedback">Email is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password" >Password</label>
                        <input
                            type="password"
                            name="Password"
                            className={"form-control password" + (submitted && !user.Password ? ' is-invalid' : '')}
                            value={user.Password}
                            placeholder="Enter password"
                            onChange={handleChange}
                        />
                        {submitted && !user.Password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" > Submit</button >
                    <div className="form-group">
                        <button className="btn btn-primary">
                            {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
                        <Link to="/signin" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default ArtistSignUp;