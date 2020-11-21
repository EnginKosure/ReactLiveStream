import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SelectInstrument from '../Concert/SelectInstrument';
import SelectStyle from '../Concert/SelectStyle';
import { userActions } from '../../actions';
import "./register.scss";
import SelectCountry from '../Concert/SelectCountry';
import Form from 'react-bootstrap/Form';
import { useForm, useFieldArray, useWatch } from 'react-hook-form';





const UpdateProfile = ({ current }) => {

    const { register, control, handleSubmit } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });

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
    // const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        // dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmitOwn(e) {
        e.preventDefault();

        setSubmitted(true);
        // if (user.ArtistFirstName && user.ArtistLastName && user.EmailAddress) {
        //     dispatch(userActions.register(user));
        // }
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


                    {/*   <div>
                        <label htmlFor="SocialLink1" />
                        <input
                            type="text"
                            name="SocialLink1"
                            className={"form-control email text-fields"}
                            value={user.SocialLink1}
                            placeholder={current.SocialLink1 || "Add social media-1"}
                            onChange={handleChange}
                        />
                    </div> */}

                    <Form.Group controlId="SocialLinks">
                        <Form.Label className={"text-fields"} style={{ width: "100%", marginTop: "10px" }}>Add social media links</Form.Label>

                        {fields.map(({ id, name, type }, index) => {
                            return (
                                <div key={id}>
                                    <Form.Text style={{ width: "100%" }}>Add social media link- {index + 1}</Form.Text>
                                    <select
                                        name={`SocialLinks[${index}].Link`}
                                        ref={register()}
                                        className={"text-fields"}
                                        style={{ width: "200px", padding: "4px", margin: "5px 5px 5px 0", fontFamily: "FontAwesome, Montserrat" }}
                                    >
                                        <option value="Select...">Select...</option>
                                        <option data-icon="fab fa-youtube" value="YouTube">&#xf167; YouTube</option>
                                        <option value="Spotify">&#xf1bc; Spotify</option>
                                        <option value="iTunes">&#xf001; iTunes</option>
                                        <option value="SoundCloud">&#xf1be; SoundCloud</option>
                                        <option value="LinkedIn">&#xf08c; LinkedIn</option>
                                        <option value="Website">&#xf268; Website</option>
                                    </select>

                                    <button
                                        className="btn btn-sm btn-custom-2"
                                        type="button" onClick={() => remove(index)}>
                                        Remove </button>
                                </div>
                            );
                        })}

                        {/* <input type="submit" /> */}
                        <button
                            className="btn btn-sm  btn-custom-1"
                            type="button" onClick={() => append({})}
                        >
                            Append </button>
                    </Form.Group>


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