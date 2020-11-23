import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SelectInstrument from '../Concert/SelectInstrument';
import SelectStyle from '../Concert/SelectStyle';
import { userActions } from '../../actions';
import "./register.scss";
import SelectCountry from '../Concert/SelectCountry';
import Form from 'react-bootstrap/Form';
import { useForm, useFieldArray, useWatch, Controller } from 'react-hook-form';
import axios from 'axios';

const UpdateProfile = ({ current }) => {

    const { register, control, handleSubmit, setValue, reset } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "items"
    });
    // https://aplaudoapi.azurewebsites.net/api/artists
    const getData = async () => {
        const { data } = await axios.get("/api/artists");
        console.log(data);
    }
    useEffect(() => {
        getData();
    }, [])

    const postData = async (x) => {
        const res = await axios.post("/api/artists", JSON.stringify(x))
        console.log(res.data);
        res.then(
            (response) => { console.log(response.json()) },
            (error) => { console.log(error) }
        );
    }

    const onSubmit = data => {

        console.log(data);

        // const options = {
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'cors', // no-cors, cors, *same-origin
        //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'include', // include, *same-origin, omit, chosen include to allowed sending cookies
        //     headers: {
        //         'Content-Type': 'application/json;charset=UTF-8',
        //         COOKIE: 'key=value; Path=/; Expires=Thu, 09 Jul 2020 07:20:21 GMT; HttpOnly',
        //     },
        //     body: JSON.stringify({ data }), // body data type must match "Content-Type" header in this case it is json
        // };

        // fetch("/api/artists", options)
        //     .then(res => {
        //         //return res.json!
        //         return res.json();
        //     })
        //     .then(data => {
        //         // do something with data
        //         console.log('Success:', data);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });



        postData(data)


        // https://aplaudoapi.azurewebsites.net/api/artists
        // fetch('/api/artists', {


        // fetch('https://aplaudoapi.azurewebsites.net/api/artists', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         "Content-type": "application/json;charset=UTF-8"
        //     }
        // })
        //     .then((response) => response.text())
        //     .then((result) => {
        //         console.log('Success:', result);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
    }

    const [user, setUser] = useState({
        ArtistFirstName: '',
        ArtistLastName: '',
        ArtistNickName: '',
        EmailAddress: '',
        Password: '',
        StyleNames: [],
        InstrumentNames: [],
        CountryName: '',
        SocialLinks: [],
        Bio: '',
        PhotoLink: '',
    });

    /*
    {
        ArtistFirstName: "dwce",
        ArtistLastName: "vsadv",
        ArtistNickName: "vdsv",
        Bio: "sfsdfcsdcsdczdacvsdcxvdscxdc",
        CountryName:{ alpha2: "dz",alpha3: "dza",flag: "🇩🇿",id: "dz",ioc: "alg",name: "Algeria"},
        EmailAddress: "test@test",
        InstrumentNames: [{label: "bass", value: "bass"}, label: "bassoon", value: "bassoon"}],
        Password: "123"
        PhotoLink: "C:\fakepath\Screenshot 2020-10-11 at 20.04.52.png",
        SocialLinks: [{Link: "dsdsdsd"},{Link: "/kabel"}],
        StyleNames: [{label: "African", value: "African"},{label: "Alternative", value: "Alternative"} ]
    }
    */
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
        if (user.ArtistFirstName && user.ArtistLastName && user.EmailAddress) {
            console.log(user);
            // dispatch(userActions.register(user));
            // fetch('/api/artists', {
            //     method: 'POST',
            //     body: JSON.stringify(user),
            //     headers: {
            //         "Content-type": "application/json;charset=UTF-8"
            //     }
            // })
            //     .then((response) => response.text())
            //     .then((result) => {
            //         console.log('Success:', result);
            //     })
            //     .catch(error => {
            //         console.error('Error:', error);
            //     });
        }
    }

    return (
        <div className="update-cont-main">
            <div className="auth-inner-update" >
                <form name="form" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text-update">Update your profile</h4>
                    <div>
                        <label htmlFor="ArtistFirstName" />
                        <input
                            type="text"
                            name="ArtistFirstName"
                            className={"form-control email text-fields" + (submitted && !user.ArtistFirstName ? ' is-invalid' : '')}
                            // value={user.ArtistFirstName}
                            placeholder={current.ArtistFirstName}
                            // onChange={handleChange}
                            ref={register}
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
                            // value={user.ArtistLastName}
                            placeholder={current.ArtistLastName}
                            // onChange={handleChange}
                            ref={register}

                        />
                        {submitted && !user.ArtistLastName &&
                            <div className="invalid-feedback">Last Name is required</div>
                        }
                    </div>

                    <div>
                        <label htmlFor="ArtistNickName" />
                        <input
                            type="text"
                            name="ArtistNickName"
                            className={"form-control email text-fields"}
                            // value={user.ArtistNickName}
                            placeholder={current.ArtistNickName || "Artist nick name"}
                            // onChange={handleChange}
                            ref={register}
                        />
                    </div>

                    <div>
                        <label htmlFor="EmailAddress" />
                        <input
                            type="email"
                            name="EmailAddress"
                            className={"form-control email text-fields" + (submitted && !user.EmailAddress ? ' is-invalid' : '')}
                            // value={user.EmailAddress}
                            placeholder={current.EmailAddress}
                            // onChange={handleChange}
                            ref={register}
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
                            // value={user.Password}
                            placeholder="Enter new password"
                            // onChange={handleChange}
                            ref={register}
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
                                // value={user.Password}
                                placeholder="Confirm password"
                                // onChange={handleChange}
                                ref={register}
                            />
                            {submitted && !user.Password &&
                                <div className="invalid-feedback">Password is required</div>
                            }
                        </div>
                    </div>}

                    <Form.Group controlId="SocialLinks">
                        <Form.Label className={"text-fields"} style={{ width: "100%", marginTop: "10px" }}>Add social media links</Form.Label>

                        {fields.map(({ id, name, type }, index) => {
                            return (
                                <div key={id}>
                                    <Form.Text style={{ width: "100%" }}>Add social media link- {index + 1}</Form.Text>
                                    <select
                                        // ref={register}
                                        name="SocialLinks"
                                        className={"text-fields"}
                                        style={{ width: "200px", padding: "4px", margin: "5px 5px 5px 0", fontFamily: "FontAwesome, Montserrat" }}
                                    >
                                        <option value="Select...">Select...</option>
                                        <option value="YouTube">&#xf167; YouTube</option>
                                        <option value="Spotify">&#xf1bc; Spotify</option>
                                        <option value="iTunes">&#xf001; iTunes</option>
                                        <option value="SoundCloud">&#xf1be; SoundCloud</option>
                                        <option value="LinkedIn">&#xf08c; LinkedIn</option>
                                        <option value="WebSite">&#xf268; WebSite</option>
                                    </select>
                                    <input
                                        type="text"
                                        name={`SocialLinks[${index}].Link`}
                                        ref={register}
                                        className={"email text-fields"}
                                        placeholder="Paste social media link"
                                        // defaultValue={name}
                                        // onChange={handleChange}
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
                            type="button" onClick={() => append({})}
                        >
                            Append </button>
                    </Form.Group>

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
                    {/* <SelectInstrument /> */}

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

                    <div>
                        <label htmlFor="Bio" />
                        <textarea
                            type="text"
                            name="Bio"
                            className={"form-control text-fields"}
                            // value={user.Bio}
                            placeholder="Biography..."
                            // onChange={handleChange}
                            ref={register}
                            cols={40}
                            rows={3}
                        />

                    </div>

                    <Controller
                        control={control}
                        name="PhotoLink"
                        render={({ onChange, value, name }) => (

                            <Form.Group>
                                <Form.Label htmlFor="PhotoLink" className="text-fields">Upload profile photo</Form.Label>
                                <Form.File
                                    type="file"
                                    className={"form-control email text-fields"}
                                    value={value}
                                    onChange={onChange}
                                />
                            </Form.Group>
                        )}
                    />

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-custom" />
                        <Link to="/signin" className="btn btn-link fgpw">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default UpdateProfile;
