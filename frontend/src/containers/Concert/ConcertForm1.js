import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CheckBoxGenre from './CheckBoxGenre';

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
        "Artists":[  "EmailAddress": "rass@gmail.com",],
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
    //     {
    //         "About":"Concert about acting in the heart of brussels in the heart of Europe in chrismas",
    //       "Style":"African",
    //       "Date":"12/01/2010",
    //       "ConcertLink":"http://wwww.google.com/1",
    //       "PictureLink":"http://wwww.google.com/2",
    //       "ProgrammaLink":"http://wwww.google.com/2",
    //       "TeaserLink":"http://wwww.google.com/2",
    //       "CountryName":"Belgium",
    //       "InstrumentationValue":"Solo",
    //       "ArtistEmails": [{"EmailAddress": "par@gmail.com"},
    //           {"EmailAddress": "rasaa@gmail.com"},
    //           {"EmailAddress": "Ralyy.MM@gmail.com"}],
    //       "InstrumentNames":[{"InstrumentName":"accordion"},{"InstrumentName":"bass"},{"InstrumentName":"Piano"}]
    // }

    const [concert, setConcert] = useState({
        About: '',
        Style: '',
        Date: '',
        ConcertLink: '',
        PictureLink: '',
        ProgrammaLink: '',
        TeaserLink: '',
        CountryName: '',
        InstrumentationValue: '',
        ArtistEmails: [],
        InstrumentNames: []
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
        setConcert(concert => ({ ...concert, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (concert.Date && concert.ArtistEmails && concert.About) {
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
                                <label htmlFor="Style" />
                                <input
                                    type="text"
                                    name="Style"
                                    className={"form-control email text-fields"}
                                    value={concert.Style}
                                    placeholder={"Add style info"}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Date" />
                                <input
                                    type="date"
                                    name="Date"
                                    className={"form-control email text-fields" + (submitted && !concert.Date ? ' is-invalid' : '')}
                                    value={concert.Date}
                                    placeholder="Concert date dd/mm/yyyy"
                                    onChange={handleChange}
                                />
                                {submitted && !concert.Date &&
                                    <div className="invalid-feedback">Date is required</div>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="ConcertLink" >Create concert link </label>
                                <input
                                    type="text"
                                    name="ConcertLink"
                                    className={"form-control email text-fields" + (submitted && !concert.ConcertLink ? ' is-invalid' : '')}
                                    value={concert.ConcertLink}
                                    placeholder={"Concert link"}
                                    onChange={handleChange}
                                />
                                {submitted && !concert.ConcertLink &&
                                    <div className="invalid-feedback">Concert link is required</div>
                                }
                            </div>

                        </div>
                        <div className="right-form">

                            <div className="form-group">
                                <label htmlFor="PictureLink" />
                                <input
                                    type="text"
                                    name="PictureLink"
                                    className={"form-control email text-fields"}
                                    value={concert.PictureLink}
                                    placeholder={"Picture Link"}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="ProgrammaLink" />
                                <input
                                    type="text"
                                    name="ProgrammaLink"
                                    className={"form-control email text-fields"}
                                    value={concert.ProgrammaLink}
                                    placeholder={"Programma Link"}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="TeaserLink" />
                                <input
                                    type="text"
                                    name="TeaserLink"
                                    className={"form-control email text-fields"}
                                    value={concert.TeaserLink}
                                    placeholder={"TeaserLink Link"}
                                    onChange={handleChange}
                                />
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
                                    <div className="invalid-feedback">Artist emails are required</div>
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
                            <div className="form-group">
                                <label htmlFor="ConcertLink">Choose Styles/Genre</label>
                                <CheckBoxGenre />

                                <input
                                    type="checkbox"
                                    list="music-styles"
                                    name="Styles"
                                    id="Styles"
                                    className={"form-control email" + (submitted && !concert.Styles ? ' is-invalid' : '')}
                                    value={concert.Styles}
                                    onChange={handleChange}
                                />
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