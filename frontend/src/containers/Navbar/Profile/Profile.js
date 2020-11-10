import React, { Component } from 'react';

import './Profile.scss';

class Profile extends Component {
    render () {
        return (
            <div>
                <h1>Amazing artists</h1>
                <button className="btn btn-primary">add</button>
            </div>
        );
    }
}

export default Profile;