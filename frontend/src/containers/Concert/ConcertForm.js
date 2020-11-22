import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CheckBoxGenre from './CheckBoxGenre';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Grid, Row, Col, Form, InputGroup } from 'react-bootstrap';
import SelectInstrument from './SelectInstrument';
import { useForm, useFieldArray, useWatch, Controller } from 'react-hook-form';

// import { concertActions } from '../../actions';
import "./concert.scss";
import SelectCountry from './SelectCountry';
import SelectStyle from './SelectStyle';



const ConcertForm = () => {

    const { register, control, handleSubmit } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });

    const onSubmit = data => console.log(data);


    //     {
    //         "About":"Concert about acting in the heart of brussels in the heart of Europe in christmas an all over the world last check final",
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
        Title: '',
        About: '',
        Style: [],
        Date: '',
        ConcertLink: '',
        PictureLink: '',
        ProgrammaLink: '',
        TeaserLink: '',
        CountryName: '',
        InstrumentationValue: '',
        ArtistEmails: [],
        InstrumentNames: [],
        Instrumentation: '',
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

    // function handleSubmitOwn(e) {
    //     e.preventDefault();

    //     setSubmitted(true);
    //     if (concert.Date && concert.ArtistEmails && concert.About && concert.Title) {
    //         // dispatch(concertActions.register(concert));
    //     }
    // }

    return (
        <div className="concert-cont-main" >
            <div className="auth-inner-concert" >
                <form name="form" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text">Create your concert!</h4>
                    <div >
                        <Form.Group
                        // controlId="Title"
                        >
                            <Form.Label htmlFor="Title" className="text-fields">Title</Form.Label>
                            <Form.Control
                                name="Title"
                                className={"form-control email text-fields" + (submitted && !concert.Title ? ' is-invalid' : '')}
                                // value={concert.Title}
                                placeholder="Title of the concert..."
                                // onChange={handleChange}
                                ref={register}

                            />
                            {submitted && !concert.About &&
                                <div className="invalid-feedback">This field is required</div>
                            }
                        </Form.Group>

                        <Form.Group controlId="About">
                            <Form.Label htmlFor="About" className="text-fields">About</Form.Label>
                            <Form.Control
                                name="About"
                                className={"form-control email text-fields" + (submitted && !concert.About ? ' is-invalid' : '')}
                                // value={concert.About}
                                placeholder="Short description of the concert..."
                                // onChange={handleChange}
                                ref={register}

                            />
                            {submitted && !concert.About &&
                                <div className="invalid-feedback">This field is required</div>
                            }
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label htmlFor="Instrumentation" className="text-fields">Instrumentation</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Instrumentation"
                                    className={"form-control email text-fields"}
                                    // value={concert.Instrumentation}
                                    // onChange={handleChange}
                                    as="select"
                                    custom
                                    ref={register}

                                >
                                    <option value="Solo">Solo</option>
                                    <option value="Duo">Duo</option>
                                    <option value="Trio">Trio</option>
                                    <option value="Quartet">Quartet</option>
                                    <option value="Quintet">Quintet</option>
                                    <option value="Chamber Music">Chamber Music</option>
                                    <option value="Choir">Choir</option>
                                    <option value="Band">Band</option>
                                    <option value="Big Band">Big Band</option>
                                    <option value="String Quartet">String Quartet</option>
                                    <option value="Combo">Combo</option>
                                    <option value="Orchestra">Orchestra</option>
                                    <option value="Other">Other</option>
                                </Form.Control>
                            </Form.Group>


                            <Controller
                                control={control}
                                name="Date"
                                render={({ onChange, value, name }) => (

                                    <Form.Group as={Col}>
                                        <Form.Label htmlFor="Date" className="text-fields" >Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            className={"form-control email text-fields" + (submitted && !concert.Date ? ' is-invalid' : '')}
                                            // value={concert.Date}
                                            placeholder="dd/mm/yyyy"
                                            // onChange={handleChange}
                                            // ref={register}
                                            value={value}
                                            onChange={onChange}

                                        />
                                        {submitted && !concert.Date &&
                                            <div className="invalid-feedback">Date is required</div>
                                        }
                                    </Form.Group>
                                )}
                            />


                        </Form.Row>


                        <Controller
                            control={control}
                            name="CountryName"
                            render={({ onChange, value, name }) => (
                                <SelectCountry
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {/* <SelectCountry /> */}

                        <Controller
                            control={control}
                            name="PictureLink"
                            render={({ onChange, value, name }) => (
                                <Form.Group>
                                    <Form.Label htmlFor="PictureLink" className="text-fields">Upload picture</Form.Label>
                                    <Form.File
                                        type="file"
                                        className={"form-control email text-fields"}
                                        // value={concert.PictureLink}
                                        // onChange={handleChange}
                                        value={value}
                                        onChange={onChange}

                                    />
                                </Form.Group>
                            )}
                        />





                        <Controller
                            control={control}
                            name="ProgrammaLink"
                            render={({ onChange, value, name }) => (

                                <Form.Group>
                                    <Form.Label htmlFor="ProgrammaLink" className="text-fields" >Upload programma</Form.Label>
                                    <Form.File
                                        type="file"
                                        className={"form-control email text-fields"}
                                        value={value}
                                        onChange={onChange}
                                    // value={concert.ProgrammaLink}
                                    // onChange={handleChange}
                                    // placeholder={"Programma Link"}
                                    />
                                </Form.Group>
                            )}
                        />




                        {/* <Form.Row>
                                <Form.Group as={Col} controlId="Somelink">
                                    <Form.Label htmlFor="PictureLink" >Upload picture</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />

                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Form.Row> */}

                        {/* <Form.Row controlId="Instrument">
                                <Form.Label style={{ width: "100%" }}>Add instrument info</Form.Label>
                                <Form.Group as={Col} >
                                    <Form.Check type="checkbox" label="accordion" />
                                    <Form.Check type="checkbox" label="bass" />
                                    <Form.Check type="checkbox" label="bassoon" />
                                    <Form.Check type="checkbox" label="banjo" />
                                    <Form.Check type="checkbox" label="cello" />
                                    <Form.Check type="checkbox" label="clarinet" />
                                    <Form.Check type="checkbox" label="classical guitar" />
                                    <Form.Check type="checkbox" label="clavichord" />
                                    <Form.Check type="checkbox" label="double bass" />
                                    <Form.Check type="checkbox" label="drums" />
                                    <Form.Check type="checkbox" label="electrical guitar" />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Check type="checkbox" label="electronics" />
                                    <Form.Check type="checkbox" label="english horn" />
                                    <Form.Check type="checkbox" label="flugelhorn" />
                                    <Form.Check type="checkbox" label="flute" />
                                    <Form.Check type="checkbox" label="french horn" />
                                    <Form.Check type="checkbox" label="harmonica" />
                                    <Form.Check type="checkbox" label="harp" />
                                    <Form.Check type="checkbox" label="harpsichord" />
                                    <Form.Check type="checkbox" label="keyboard" />
                                    <Form.Check type="checkbox" label="lute" />
                                    <Form.Check type="checkbox" label="mandolin" />
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Check type="checkbox" label="oboe" />
                                    <Form.Check type="checkbox" label="organ" />
                                    <Form.Check type="checkbox" label="other" />
                                    <Form.Check type="checkbox" label="oud" />
                                    <Form.Check type="checkbox" label="piccolo" />
                                    <Form.Check type="checkbox" label="recorder" />
                                    <Form.Check type="checkbox" label="saxophone" />
                                    <Form.Check type="checkbox" label="sitar" />
                                    <Form.Check type="checkbox" label="theorbo" />
                                    <Form.Check type="checkbox" label="traverso" />
                                    <Form.Check type="checkbox" label="trombone" />
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Check type="checkbox" label="trumpet" />
                                    <Form.Check type="checkbox" label="tuba" />
                                    <Form.Check type="checkbox" label="ukulele" />
                                    <Form.Check type="checkbox" label="vihuela" />
                                    <Form.Check type="checkbox" label="viola" />
                                    <Form.Check type="checkbox" label="viola da gamba" />
                                    <Form.Check type="checkbox" label="viola d'amore" />
                                    <Form.Check type="checkbox" label="violin" />
                                    <Form.Check type="checkbox" label="voice" />
                                </Form.Group>
                            </Form.Row> */}


                        <Controller
                            control={control}
                            name="InstrumentNames"
                            render={({ onChange, value, name }) => (
                                <SelectInstrument
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {/* <SelectedInstrument /> */}


                        <Controller
                            control={control}
                            name="StyleNames"
                            render={({ onChange, value, name }) => (
                                <SelectStyle
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {/* <SelectStyle /> */}

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label htmlFor="TeaserLink" className="text-fields">Add teaser link</Form.Label>
                            <Form.Control
                                type="text"
                                name="TeaserLink"
                                className={"form-control email text-fields"}
                                // value={concert.TeaserLink}
                                placeholder={"Teaser link"}
                                // onChange={handleChange}
                                ref={register}

                            />
                        </Form.Group>

                        {/* <InputGroup as={Form.Group} className="mb-3">
                                <Form.Label htmlFor="ArtistEmails">Add Artist email 1</Form.Label>
                                <Form.Control
                                    placeholder="Email of the artist1"
                                    aria-label="ArtistEmails"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup> */}

                        {/* <Form.Group controlId="ArtistEmails">
                                <Form.Label>Email address(es)</Form.Label>
                                <Form.Control type="email" placeholder="Enter email (of the artist(s))" />
                                <Form.Control type="email" placeholder="Enter email (of the artist(s))" />

                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group> */}

                        <Form.Group controlId="ArtistEmails">
                            <Form.Label style={{ width: "100%" }} className="text-fields" >Add Artist emails</Form.Label>

                            {fields.map(({ id, name, type }, index) => {
                                return (
                                    <div key={id}>
                                        <Form.Text style={{ width: "100%" }}>Add Artist email {index + 1}</Form.Text>
                                        <input
                                            ref={register}
                                            name={`ArtistEmails[${index}].EmailAddress`}
                                            defaultValue={name}
                                            style={{ width: "200px", margin: "5px 5px 5px 0", fontFamily: "FontAwesome, Montserrat" }}
                                        />

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
                                type="button" onClick={() => append({})}>
                                Append </button>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label htmlFor="ConcertLink">
                                <Button variant="info">Create concert link...</Button>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="ConcertLink"
                                className={"form-control email text-fields" + (submitted && !concert.ConcertLink ? ' is-invalid' : '')}
                                // value={concert.ConcertLink}
                                placeholder={"Concert link"}
                                // onChange={handleChange}
                                ref={register}
                            />
                            {submitted && !concert.ConcertLink &&
                                <div className="invalid-feedback">Concert link is required</div>
                            }
                        </Form.Group>

                        {/* <CheckBoxGenre /> */}


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
        </div >
    );
};
export default ConcertForm;