import React, { Component } from 'react';
import UserCard from '../../components/UserCard';
import { useDispatch, useSelector } from 'react-redux';

import './profile.css';

const Profile = () => {
    const user = useSelector(state => state.users.items[state.users.items.length - 1]);
    return (
        <div>
            <UserCard user={user} />
        </div>
    );
}

export default Profile;