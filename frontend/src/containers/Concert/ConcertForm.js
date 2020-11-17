import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import { concertActions } from '../../actions';
import "./concert.scss";



const ConcertForm = () => {

    // 
    /*- Date: the date of the concert;
    - About: Text about the concert;
    - Style: List of styles of the concert (same list of styles of artists, but for each concert an artist can choose different values of styles;
    - Artist(s): The artist can choose if he/she will make the concert alone or with another musicians. In the case that the artist will make the concert with other musicians and this musicians are also registered on the platform, the user can tag this musician.
    - Instruments: List of instruments of the concert (same list of instruments of artists, but for each concert an artist can choose different values of instruments;
    - Instrumentation: List of instrumentation to choose.
    - Country: A list of countries for the user to choose, in case that the user is playing music from a specific country.
    - Links: YouTube links for teaser / trailers and so on.
    - Picture: A jpg/png picture of the event:
    - Programma: A pdf/jpg file with the programma of the concert, if there is one>
    {
        "Dates" : new Date('1995-12-17T03:24:00'),
        "About": "A concert in memory of Beetles",
        "Artists":[{
                    "ArtistFirstName": "Bin",
                    "ArtistLastName": "Barly",
                    "EmailAddress": "rass@gmail.com",
                    "Password": "123dwccetere"
                     }],
        "Styles" : ["country","jazz"],
        "Instruments": ["accordion","bass","bassoon","banjo","cello","clarinet","classical guitar",
                    "clavichord","double bass","drums","electrical guitar","electronics","english horn","flute",
                    "flugelhorn","french horn","harmonica","harp","harpsichord","keyboard","lute","mandolin",
                    "oboe","organ","other","oud","percussion","piano", "piccolo","recorder","saxophone","sitar",
                    "theorbo","traverso","trombone","trumpet","tuba","ukulele","vihuela", "viola","viola da gamba",
                    "viola d'amore","violin", "voice""],
        "Country" : ["Select from dropdown list"],
        "Links" :["link1","link2"],
        "Picture": ["jpg/png img url link"],
        "Programma": ["A pdf/jpg file url link"]
    }
    */
    // 
    const [concert, setConcert] = useState({
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
        // dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setConcert(concert => ({ ...concert, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (concert.Dates && concert.Artists && concert.Instruments) {
            // dispatch(concertActions.register(concert));
        }
    }

    return (
        <div className="main-container">

            <div className="auth-inner" id="profile-wrapper">
                <form className="container" name="form" onSubmit={handleSubmit}>
                    <h4 className="text">Create your concert!</h4>
                    <div className="main-profile-update">

                        <div className="left-form">

                            <div className="form-group">
                                <label htmlFor="Dates" />
                                <input
                                    type="date"
                                    name="Dates"
                                    className={"form-control email text-fields" + (submitted && !concert.Dates ? ' is-invalid' : '')}
                                    value={concert.Dates}
                                    placeholder="Concert date dd/mm/yyyy"
                                    onChange={handleChange}
                                />
                                {submitted && !concert.Dates &&
                                    <div className="invalid-feedback">Date is required</div>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="About" />
                                <input
                                    type="text"
                                    name="About"
                                    className={"form-control email text-fields" + (submitted && !concert.About ? ' is-invalid' : '')}
                                    value={concert.About}
                                    placeholder="About the concert..."
                                    onChange={handleChange}
                                />
                                {submitted && !concert.About &&
                                    <div className="invalid-feedback">This field is required</div>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="Artists" />
                                <input
                                    type="email"
                                    name="Artists"
                                    className={"form-control email text-fields" + (submitted && !concert.Artists ? ' is-invalid' : '')}
                                    value={concert.Artists}
                                    placeholder="Emails of the artists"
                                    onChange={handleChange}
                                />
                                {submitted && !concert.Artists &&
                                    <div className="invalid-feedback">Emails are required</div>
                                }
                            </div>

                            {/* 
        "Styles" : ["country","jazz"],
        "Instruments": ["accordion","bass","bassoon","banjo","cello","clarinet","classical guitar",
        "Country" : ["Select from dropdown list"],
        "Links" :["link1","link2"],
        "Picture": ["jpg/png img url link"],
        "Programma": ["A pdf/jpg file url link"] */}
                            <div className="form-group">
                                <label htmlFor="Styles">Choose Styles/Genre</label>
                                <input
                                    type="checkbox"
                                    list="music-styles"
                                    name="Styles"
                                    id="Styles"
                                    className={"form-control email" + (submitted && !concert.Styles ? ' is-invalid' : '')}
                                    value={concert.Styles}
                                    onChange={handleChange}
                                />

                                {submitted && !concert.Password &&
                                    <div className="invalid-feedback">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password" />
                                <input
                                    type="password"
                                    name="Password"
                                    className={"form-control password" + (submitted && !concert.Password ? ' is-invalid' : '')}
                                    value={concert.Password}
                                    placeholder="Confirm password"
                                    onChange={handleChange}
                                />
                                {submitted && !concert.Password &&
                                    <div className="invalid-feedback">Password is required</div>
                                }
                            </div>
                        </div>
                        <div className="right-form">

                            <div className="form-group">
                                <label htmlFor="SocialLink1" />
                                <input
                                    type="text"
                                    name="SocialLink1"
                                    className={"form-control email text-fields" + (submitted && !concert.ArtistFirstName ? ' is-invalid' : '')}
                                    value={concert.SocialLink1}
                                    placeholder={"Add social media-1"}
                                    onChange={handleChange}
                                />
                                {submitted && !concert.ArtistFirstName &&
                                    <div className="invalid-feedback">First Name is required</div>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="SocialLink2" />
                                <input
                                    type="text"
                                    name="SocialLink2"
                                    className={"form-control email text-fields" + (submitted && !concert.ArtistFirstName ? ' is-invalid' : '')}
                                    value={concert.SocialLink2}
                                    placeholder={"Add social media-2"}
                                    onChange={handleChange}
                                />
                                {submitted && !concert.ArtistFirstName &&
                                    <div className="invalid-feedback">First Name is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="SocialLink3" />
                                <input
                                    type="text"
                                    name="SocialLink3"
                                    className={"form-control email text-fields" + (submitted && !concert.ArtistFirstName ? ' is-invalid' : '')}
                                    value={concert.SocialLink3}
                                    placeholder={"Add social media-3"}
                                    onChange={handleChange}
                                />
                                {submitted && !concert.ArtistFirstName &&
                                    <div className="invalid-feedback">First Name is required</div>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="Genre" />
                                <input
                                    type="text"
                                    name="Genre"
                                    className={"form-control email text-fields" + (submitted && !concert.ArtistFirstName ? ' is-invalid' : '')}
                                    value={concert.Genre}
                                    placeholder={"Add genre info"}
                                    onChange={handleChange}
                                />
                                {submitted && !concert.ArtistFirstName &&
                                    <div className="invalid-feedback">First Name is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <label htmlFor="Instrument" />
                                <input
                                    type="text"
                                    name="Instrument"
                                    className={"form-control email text-fields" + (submitted && !concert.ArtistFirstName ? ' is-invalid' : '')}
                                    value={concert.Instrument}
                                    placeholder={"Add instrument info"}
                                    onChange={handleChange}
                                />
                                {submitted && !concert.ArtistFirstName &&
                                    <div className="invalid-feedback">First Name is required</div>
                                }
                            </div>

                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ArtistBio" />
                        <textarea
                            type="text"
                            name="ArtistBio"
                            className={"form-control password" + (submitted && !concert.Password ? ' is-invalid' : '')}
                            value={concert.Password}
                            placeholder="Biography..."
                            onChange={handleChange}
                            cols={40}
                            rows={5}
                        />
                        {submitted && !concert.Password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary btn-custom">
                            {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Submit
                    </button>
                        <Link to="/" className="btn btn-link fgpw">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default ConcertForm;