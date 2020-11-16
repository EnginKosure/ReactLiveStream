import React from 'react'
import './DashboardRight.scss'
import { Link } from 'react-router-dom';

function DashboardRight({ user }) {
    return (
        <div>
            <section>
                <div className="flipbox">
                    <div className="back concert">

                        <a href="#" target="_blank">Add Concert</a>
                    </div>
                    <div className="front">
                        <h2>Concert</h2>
                        <i className="fa fa-fort-awesome"></i>
                    </div>
                </div>

                <div className="flipbox">
                    <div className="back profile">
                        <Link to="/profile">Update Profile</Link>
                    </div>
                    <div className="front">
                        <h2>Update Profile</h2>
                        <i className="fa fa-id-card"></i>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default DashboardRight