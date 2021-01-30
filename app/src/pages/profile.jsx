import React from 'react';

import { Banner } from "../components";

class Profile extends React.Component {
    render() {
        return (
            <div className="container">
                <Banner page="Profile" />
                Profile
            </div>
        )
    }
}
export default Profile;