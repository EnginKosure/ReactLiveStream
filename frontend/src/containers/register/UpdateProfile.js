import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SelectInstrument from '../Concert/SelectInstrument';
import SelectStyle from '../Concert/SelectStyle';
import { userActions } from '../../actions';
import "./register.scss";
import SelectCountry from '../Concert/SelectCountry';



const UpdateProfile = ({ current }) => {

    const [user, setUser] = useState({
        ArtistPhoto: '',
        ArtistFirstName: '',
        ArtistLastName: '',
        EmailAddress: '',
        Password: '',
        StyleName: [],
        CountryName: ''
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
        if (user.ArtistFirstName && user.ArtistLastName && user.EmailAddress) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div className="update-cont-main">
            <div className="auth-inner-update" >
                <form name="form" onSubmit={handleSubmit}>
                    <h4 className="text-update">Update your profile</h4>
                    <div>
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

                    <div>
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

                    <div>
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
                    {(current.EmailAddress !== user.EmailAddress) && <div><div>
                        <label htmlFor="Password" />
                        <input
                            type="password"
                            name="Password"
                            className={"form-control password text-fields" + (submitted && !user.Password ? ' is-invalid' : '')}
                            value={user.Password}
                            placeholder="Enter new password"
                            onChange={handleChange}
                        />
                        {submitted && !user.Password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                    </div>
                        <div>
                            <label htmlFor="Password" />
                            <input
                                type="password"
                                name="Password"
                                className={"form-control password text-fields" + (submitted && !user.Password ? ' is-invalid' : '')}
                                value={user.Password}
                                placeholder="Confirm password"
                                onChange={handleChange}
                            />
                            {submitted && !user.Password &&
                                <div className="invalid-feedback">Password is required</div>
                            }
                        </div>
                    </div>}


                    <div>
                        <label htmlFor="SocialLink1" />
                        <input
                            type="text"
                            name="SocialLink1"
                            className={"form-control email text-fields"}
                            value={user.SocialLink1}
                            placeholder={current.SocialLink1 || "Add social media-1"}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="SocialLink2" />
                        <input
                            type="text"
                            name="SocialLink2"
                            className={"form-control email text-fields"}
                            value={user.SocialLink2}
                            placeholder={current.SocialLink2 || "Add social media-2"}
                            onChange={handleChange}
                        />
                    </div>
                    <div id="selected-update">
                        <label htmlFor="SocialLink3" />
                        <input
                            type="text"
                            name="SocialLink3"
                            className={"form-control email text-fields"}
                            value={user.SocialLink3}
                            placeholder={current.SocialLink3 || "Add social media-3"}
                            onChange={handleChange}
                        />
                    </div>
                    <SelectInstrument />
                    <SelectStyle />

                    {/* <div>
                        <label htmlFor="Style" />
                        <input
                            type="text"
                            name="Style"
                            className={"form-control email text-fields" + (submitted && !user.Style ? ' is-invalid' : '')}
                            value={user.Style}
                            placeholder={current.Style || "Add style info"}
                            onChange={handleChange}
                        />
                        {submitted && !user.Style &&
                            <div className="invalid-feedback">First Name is required</div>
                        }
                    </div>
                    <div>
                        <label htmlFor="Instrument" />
                        <input
                            type="text"
                            name="Instrument"
                            className={"form-control email text-fields" + (submitted && !user.ArtistFirstName ? ' is-invalid' : '')}
                            value={user.Instrument}
                            placeholder={current.Instrument || "Add instrument info"}
                            onChange={handleChange}
                        />
                        {submitted && !user.ArtistFirstName &&
                            <div className="invalid-feedback">First Name is required</div>
                        }
                    </div> */}

                    <SelectCountry />


                    <div>
                        <label htmlFor="ArtistBio" />
                        <textarea
                            type="text"
                            name="ArtistBio"
                            className={"form-control text-fields"}
                            value={user.ArtistBio}
                            placeholder="Biography..."
                            onChange={handleChange}
                            cols={40}
                            rows={3}
                        />

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