import React from 'react';

class Banner extends React.Component {
    render() {
        return (
            <div className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/#">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="" />
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/#">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu" href="/#">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/#">Home</a>
                        <a className="navbar-item" href="/#"> Edit Calendar</a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="/#">More</a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item" href="/#">About</a>
                                <a className="navbar-item" href="/#">Jobs</a>
                                <a className="navbar-item" href="/#">Contact</a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item" href="/#">Report an issue</a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary" href="/#">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light" href="/#">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Banner;