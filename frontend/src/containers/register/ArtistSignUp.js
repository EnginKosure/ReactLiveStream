import React, { useState } from 'react';
import "./register.css";

const ArtistSignUp = () => {

    // {
    //     "ArtistFirstName": "Bin",
    //     "ArtistLastName": "Barly",
    //     "ArtistNickName": "Barlo",
    //     "EmailAddress": "rass@gmail.com",
    //     "Password": "123dwccetere"
    // }
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickName, setNickName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-wrapper">
            <div className="auth-inner">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card photo"
                />
                <form className="container">
                    <h3>Create an account</h3>
                    <div className="form-group">
                        <label htmlFor="ArtistFirstName">First name</label>
                        <input
                            type="text"
                            name="ArtistFirstName"
                            className="form-control email"
                            value={name}
                            placeholder="Enter first name"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ArtistLastName">Last name</label>
                        <input
                            type="text"
                            name="ArtistLastName"
                            className="form-control email"
                            value={lastName}
                            placeholder="Enter last name"
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ArtistNickName">Nick name</label>
                        <input
                            type="text"
                            name="ArtistNickName"
                            className="form-control email"
                            value={nickName}
                            placeholder="Enter nick name"
                            onChange={e => setNickName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="EmailAddress">Email address</label>
                        <input
                            type="email"
                            name="EmailAddress"
                            className="form-control email"
                            value={email}
                            placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password" >Password</label>
                        <input
                            type="password"
                            name="Password"
                            className="form-control password"
                            value={password}
                            placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" > Submit</button >
                </form>
            </div>
        </div>
    );
};
export default ArtistSignUp;