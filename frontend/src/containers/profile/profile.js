import React, { Component } from 'react';
import UserCard from '../../components/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import UpdateProfile from '../register/UpdateProfile';

import './profile.scss';

const Profile = () => {
    const user = useSelector(state => state?.users?.items[state.users.items.length - 1]);
    return (
        <div className="profile-container">
            <UserCard user={user} />
            <UpdateProfile current={user} />
        </div>
    );
}

export default Profile;