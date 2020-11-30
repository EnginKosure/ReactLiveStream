import React from 'react';
import './UserCard.scss';
import logo from '../assets/logo_.png';
import { Link } from 'react-router-dom';
const UserCard = ({ user }) => {
    return (
        <div className="card-container">
            <div className="dash" ><img className="logo" src={logo} alt="logo" /></div>
            <div className="navi">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card photo"
                />
                <h6 className="user-h6">{user?.ArtistFirstName} {user?.ArtistLastName}</h6>
                <ul>
                    <li className="active"><Link to="/"><i className="fa fa-columns" aria-hidden="true"></i>User DashBoard</Link></li>
                    <li><Link to="/profile"><i className="fa fa-user-circle" aria-hidden="true" />Profile Info</Link></li>
                    <li><Link to="/"><i className="fa fa-cog" aria-hidden="true" />Settings</Link></li>
                    <li><Link to="/"><i className="fa fa-inbox" aria-hidden="true" />Usage</Link></li>
                    <li><Link to="/"><i className="fa fa-envelope" aria-hidden="true" />Contacts</Link></li>
                    <li><Link to="/"><i className="fa fa-question-circle" aria-hidden="true" />Help</Link></li>
                </ul>
                <p>Dark Mode On/Off </p>
            </div>
        </div>
    )
}

export default UserCard;
