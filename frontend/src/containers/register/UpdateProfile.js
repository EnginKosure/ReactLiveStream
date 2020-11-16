import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../actions';
import "./register.scss";



const UpdateProfile = ({ current }) => {

    // {
    //     "ArtistFirstName": "Bin",
    //     "ArtistLastName": "Barly",
    //     "EmailAddress": "rass@gmail.com",
    //     "Password": "123dwccetere"
    // }


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

            <div className="auth-inner">
                <form className="container" name="form" onSubmit={handleSubmit}>
                    <h4 className="text">Update your profile</h4>
                    <div className="main-profile-update">

                        <div className="left-form">

                            <div className="form-group">
                                <label htmlFor="ArtistFirstName" />
                                <input
                                    type="text"
                                    name="ArtistFirstName"
                                    className={"form-control email text-fields" + (submitted && !user.ArtistFirstName ? ' is-invalid' : '')}
                                    value={user.ArtistFirstName}
                                    placeholder={current.ArtistFirstName}
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
                                    placeholder={current.ArtistLastName}
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
                                    placeholder={current.EmailAddress}
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
                                    placeholder="Enter new password"
                                    onChange={handleChange}
                                />
                                {submitted && !user.Password &&
                                    <div className="invalid-feedback">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password" />
                                <input
                                    type="password"
                                    name="Password"
                                    className={"form-control password" + (submitted && !user.Password ? ' is-invalid' : '')}
                                    value={user.Password}
                                    placeholder="Confirm password"
                                    onChange={handleChange}
                                />
                                {submitted && !user.Password &&
                                    <div className="invalid-feedback">Password is required</div>
                                }
                            </div>
                        </div>
                        <div className="right-form">

                            <div className="form-group">
                                <label htmlFor="ArtistFirstName" />
                                <input
                                    type="text"
                                    name="ArtistFirstName"
                                    className={"form-control email text-fields" + (submitted && !user.ArtistFirstName ? ' is-invalid' : '')}
                                    value={user.ArtistFirstName}
                                    placeholder={current.ArtistFirstName}
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
                                    placeholder={current.ArtistLastName}
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
                                    placeholder={current.EmailAddress}
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
                                    placeholder="Enter new password"
                                    onChange={handleChange}
                                />
                                {submitted && !user.Password &&
                                    <div className="invalid-feedback">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password" />
                                <input
                                    type="password"
                                    name="Password"
                                    className={"form-control password" + (submitted && !user.Password ? ' is-invalid' : '')}
                                    value={user.Password}
                                    placeholder="Confirm password"
                                    onChange={handleChange}
                                />
                                {submitted && !user.Password &&
                                    <div className="invalid-feedback">Password is required</div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-custom">
                            {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Update
                    </button>
                        <Link to="/signin" className="btn btn-link fgpw">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default UpdateProfile;